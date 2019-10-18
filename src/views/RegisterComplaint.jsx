import React, { Fragment, Component } from 'react';
import PanelHeader from 'components/PanelHeader/PanelHeader.jsx';
import defaultImage from '../assets/img/avatar.png';
import { selectImage } from '../actions';
import { connect } from 'react-redux';

class RegisterComplaint extends Component {
	state = {
		alert: false
	};

	handleFileChange = (event) => {
		console.log(event.currentTarget.files[0]);
		this.props.selectImage(URL.createObjectURL(event.currentTarget.files[0]));
	};

	handleSubmit = () => {
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
							src={this.props.selectedImage ? this.props.selectedImage : defaultImage}
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
									/>
									<datalist id="sexList">
										<option value="Male" />
										<option value="Female" />
										<option value="Other" />
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
