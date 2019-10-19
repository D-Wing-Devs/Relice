import React, { Fragment } from 'react';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';

// reactstrap components
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	Row,
	Col,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Table
} from 'reactstrap';

// core components
import PanelHeader from 'components/PanelHeader/PanelHeader.jsx';

import { dashboardPanelChart, UsersSuggestions } from 'variables/charts.jsx';
import { thead, tbody } from 'variables/general';

class Dashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<PanelHeader
					size="lg"
					content={<Line data={dashboardPanelChart.data} options={dashboardPanelChart.options} />}
				/>
				<div className="content">
					<Row>
						<Col xs={12} md={6}>
							<Card className="card-chart" style={{ height: '95.5%' }}>
								<CardHeader>
									<h5 className="card-category">National Analysis</h5>
									<CardTitle tag="h4">Public Engagement</CardTitle>
									<UncontrolledDropdown>
										<DropdownToggle
											className="btn-round btn-outline-default btn-icon"
											color="default"
										>
											<i className="now-ui-icons loader_gear" />
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem>Action</DropdownItem>
											<DropdownItem>Another Action</DropdownItem>
											<DropdownItem>Something else here</DropdownItem>
											<DropdownItem className="text-danger">Remove data</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								</CardHeader>
								<CardBody>
									<div className="chart-area">
										<Line data={UsersSuggestions.data} options={UsersSuggestions.options} />
									</div>
								</CardBody>
								<CardFooter>
									<div className="stats">
										<i
											className="now-ui-icons arrows-1_refresh-69"
											style={{ marginTop: '13%' }}
										/>{' '}
										Just Updated
									</div>
								</CardFooter>
							</Card>
						</Col>

						<Col xs={12} md={6}>
							<Card>
								<CardHeader>
									<h5 className="card-category">Recent Missings</h5>
									<CardTitle tag="h4">Victim Details</CardTitle>
								</CardHeader>
								<CardBody>
									<Table responsive>
										<thead className="text-primary">
											<tr>
												{thead.map((prop, key) => {
													if (key === thead.length - 1)
														return (
															<th key={key} className="text-right">
																{prop}
															</th>
														);
													return <th key={key}>{prop}</th>;
												})}
											</tr>
										</thead>
										<tbody>
											{tbody.map((prop, key) => {
												if (key > 4) return;
												return (
													<tr key={key}>
														{prop.data.map((prop, key) => {
															if (key === thead.length - 1)
																return (
																	<td key={key} className="text-right">
																		{prop}
																	</td>
																);

															return <td key={key}>{prop}</td>;
														})}
													</tr>
												);
											})}
										</tbody>
									</Table>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	}
}

export default Dashboard;
