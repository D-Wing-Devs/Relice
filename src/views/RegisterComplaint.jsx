import React, { Fragment, Component } from 'react';
import PanelHeader from 'components/PanelHeader/PanelHeader.jsx';
import defaultImage from '../assets/img/avatar.png';
import { selectImage } from '../actions';
import { connect } from 'react-redux';
import { thisExpression } from '@babel/types';

class RegisterComplaint extends Component {
	state = {
		selectedImage: null,
		name: '',
		location: '',
		age: 0,
		skinColor: '',
		height: 0,
		sex: '',
		alert: false,
		hairColor: false
	};

	handleFileChange = (event) => {
		console.log(event.currentTarget.files[0]);
		this.setState({ selectedImage: URL.createObjectURL(event.currentTarget.files[0]) });
		// this.props.selectImage(URL.createObjectURL(event.currentTarget.files[0]));
	};

	componentWillUnmount = () => {
		console.log(this.state);
		//todo:save to store here for
	};

	componentDidMount = () => {
		//todo : get data from store and set it to the local state
	};

	handleSubmit = (event) => {
		event.preventDefault();
		//todo : upload the image
		//todo : get the image url
		//todo : save the data to the db
		if (this.props.selectedImage === null) {
			this.setState({
				alert: true
			});
		} else {
			this.setState({
				alert: false
			});
		}
	};

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
				<form>
					<div className="header text-center" style={{ margin: '2% auto' }}>
						<img
							src={this.state.selectedImage ? this.state.selectedImage : defaultImage}
							alt="uploaded-image"
							style={{ height: '200px', width: '200px' }}
						/>
						<div
							class="alert alert-danger"
							role="alert"
							style={{
								width: '20%',
								fontSize: '13px',
								margin: '2% auto',
								display: this.state.alert ? 'block' : 'none'
							}}
						>
							Please Upload the Image
						</div>
						<input
							type="file"
							onChange={this.handleFileChange}
							ref={(input) => (this.inputElement = input)}
							style={{ display: 'none' }}
							required
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
										value={this.state.name}
										onChange={(e) => this.setState({ name: e.target.value })}
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
										onChange={(e) => this.setState({ location: e.target.value })}
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
										onChange={(e) => this.setState({ age: e.target.value })}
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
										onChange={(e) => this.setState({ height: e.target.value })}
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
										name="skin-color"
										placeholder="Skin Color"
										list="skinColorsList"
										value={this.state.skinColor}
										onChange={(e) => this.setState({ skinColor: e.target.value })}
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
										onChange={(e) => this.setState({ sex: e.target.value })}
									/>
									<datalist id="sexList">
										<option value="Male" />
										<option value="Female" />
										<option value="Other" />
									</datalist>
								</div>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="text"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="hair-color"
										placeholder="Hair Color"
										list="hairColorList"
										value={this.state.hairColor}
										onChange={(e) => this.setState({ hairColor: e.target.value })}
									/>
									<datalist id="hairColorList">
										<option value="Blonde" />
										<option value="Brunette" />
										<option value="Red" />
										<option value="Black" />
									</datalist>
								</div>
							</div>
						</div>
						<button className="btn btn-info" onClick={this.handleSubmit}>
							Submit
						</button>
					</div>
				</form>
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
