import React, { Fragment, Component } from 'react';
import PanelHeader from 'components/PanelHeader/PanelHeader.jsx';
import defaultImage from '../assets/img/avatar.png';
import { selectImage } from '../actions';
import { connect } from 'react-redux';
import { thisExpression } from '@babel/types';

class RegisterComplaint extends Component {

	state = {
		image_file : null,
		name : "",
		location : "",
		age : 0,
		color : "",
		height : 0,
		sex : ""
	}

	handleFileChange = (event) => {
		console.log(event.currentTarget.files[0]);
		this.setState({image_file : event.currentTarget.files[0]});
		// this.props.selectImage(URL.createObjectURL(event.currentTarget.files[0]));
	};

	handleSubmit = (event) => {
		event.preventDefault();
		//todo : upload the image
		//todo : get the image url
		//todo : save the data to the db
	}

	componentWillUnmount = () => {
		console.log(this.state);
		//todo:save to store here
	}

	render() {
		return (
			<Fragment>
				<PanelHeader
					size="sm"
					content={
						<div className="header text-center">
							<h2 className="title">Register Complaint</h2>
						</div>
					}
				/>
				<div className="header text-center" style={{ margin: '2% auto' }}>
					<img
						src={this.props.selectedImage ? this.props.selectedImage : defaultImage}
						alt="uploaded-image"
						style={{ height: '200px', width: '200px' }}
					/>
					<input
						required
						type="file"
						onChange={this.handleFileChange}
						ref={(input) => (this.inputElement = input)}
						style={{ display: 'none' }}
					/>
					<div className="form-group form-control" style={{ border: 'none' }}>
						<button
							className="btn btn-primary"
							onClick={(e) => {
								e.preventDefault();
								this.inputElement.click();
							}}
						>
							<p style={{ margin: '0', padding: '0' }}>Pick an Image</p>
						</button>
					</div>
					<form onSubmit={this.handleSubmit}>
						<div
							className="form-group form-control"
							style={{ background: 'white', padding: '3%', width: '75%', margin: '0 auto' }}
						>
							<div className="form-group row">
								<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										Name
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="text"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="name"
										placeholder="Name"
										value = {this.state.name}
										onChange = {e => this.setState({name : e.target.value})}
								
									/>
								</div>
								<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										Location
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="text"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="location"
										placeholder="Last seen location"
										value={this.state.location}
										onChange={e => this.setState({ location: e.target.value })}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										Age
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="number"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="age"
										min="0"
										max="100"
										placeholder="Age (years)"
										value={this.state.age}
										onChange={e => this.setState({ age: e.target.value })}
									/>
								</div>
								<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										Height
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="number"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="height"
										placeholder="Height (cm)"
										value={this.state.height}
										onChange={e => this.setState({ height: e.target.value })}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										Color
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="text"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="height"
										placeholder="Color"
										list="colorsList"
										value={this.state.color}
										onChange={e => this.setState({ color: e.target.value })}
									/>
									<datalist id="colorsList">
										<option value="White/Fair" />
										<option value="Medium/White to light brown" />
										<option value="Olive/moderate brown" />
										<option value="Brown/dark brown" />
									</datalist>
								</div>
								<label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										Sex
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="sex"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="sex"
										placeholder="Sex"
										list="sexList"
										value={this.state.sex}
										onChange={e => this.setState({ sex: e.target.value })}
									/>
									<datalist id="sexList">
										<option value="Male" />
										<option value="Female" />
										<option value="Other" />
									</datalist>
								</div>
							</div>
						</div>
						<input type="submit"/>
					</form>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedImage: state.selectedImage
	};
};

export default connect(mapStateToProps, { selectImage })(RegisterComplaint);
