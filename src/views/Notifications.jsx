import React, { Fragment, Component } from 'react';
// react plugin for creating notifications over the dashboard
import NotificationAlert from 'react-notification-alert';

// reactstrap components
import { Alert, Card, CardTitle, CardBody, CardHeader, Row, Col, Button } from 'reactstrap';

// core components
import PanelHeader from 'components/PanelHeader/PanelHeader.jsx';

const colors = [ 'primary', 'success', 'danger', 'warning', 'info' ];
const notifications = [
	'Possible match found. Location : Jodhpur, Rajasthan',
	'Possible match found. Location : Bangalore, Karnatak',
	'Possible match found. Location : Mumbai, Maharashtra',
	'Possible match found. Location : Pune, Maharashtra',
	'Possible match found. Location : Hyderabad, Telangana',
	'Possible match found. Location : Lucknow, UP'
];

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true
		};
		this.onDismiss = this.onDismiss.bind(this);
		this.notify = this.notify.bind(this);
	}
	onDismiss() {}

	notify(place) {
		var color = Math.floor(Math.random() * 5 + 1);
		var type;
		switch (color) {
			case 1:
				type = 'primary';
				break;
			case 2:
				type = 'success';
				break;
			case 3:
				type = 'danger';
				break;
			case 4:
				type = 'warning';
				break;
			case 5:
				type = 'info';
				break;
			default:
				break;
		}
		var options = {};
		options = {
			place: place,
			message: (
				<div>
					<div>
						Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for every web developer.
					</div>
				</div>
			),
			type: type,
			icon: 'now-ui-icons ui-1_bell-53',
			autoDismiss: 7
		};
		this.refs.notificationAlert.notificationAlert(options);
	}
	render() {
		return (
			<Fragment>
				<PanelHeader
					content={
						<div className="header text-center">
							<h2 className="title">Notifications</h2>
						</div>
					}
				/>
				<div className="content">
					<NotificationAlert ref="notificationAlert" />
					<Row>
						<Col md={3} xs={12} />
						<Col md={6} xs={12}>
							<Card>
								<CardHeader>
									<CardTitle tag="h4">Notifications</CardTitle>
								</CardHeader>
								<CardBody>
									{notifications.map((notification, index) => {
										return (
											<Alert className="btn" color={colors[index % 5]} style={{ width: '100%' }}>
												<span>{notification}</span>
											</Alert>
										);
									})}
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	}
}

export default Notifications;
