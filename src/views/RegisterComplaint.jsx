import React, { Fragment, Component } from 'react';
import PanelHeader from 'components/PanelHeader/PanelHeader.jsx';
import defaultImage from '../assets/img/avatar.png';
import { selectImage } from '../actions';
import { connect } from 'react-redux';

class RegisterComplaint extends Component {
	handleFileChange = (event) => {
		console.log(event.currentTarget.files[0]);
		this.props.selectImage(URL.createObjectURL(event.currentTarget.files[0]));
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
					<form>
						<div
							className="form-group form-control"
							style={{ background: 'white', padding: '3%', width: '75%', margin: '0 auto' }}
						>
							<div className="form-group row">
								<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										First Name
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="text"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="firstname"
										placeholder="First name"
									/>
								</div>
								<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										Last Name
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="text"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="lastname"
										placeholder="Last name"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">
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
								<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">
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
										placeholder="Height (ft)"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">
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
								<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">
									<header style={{ fontSize: '12px', fontWeight: '800', color: '#615b5b' }}>
										Gender
									</header>
								</label>
								<div className="col">
									<input
										required
										style={{ background: 'white' }}
										type="gender"
										className="form-control form-control-sm"
										id="colFormLabelSm"
										name="gender"
										placeholder="Gender"
										list="genderList"
									/>
									<datalist id="genderList">
										<option value="Male" />
										<option value="Female" />
										<option value="Other" />
									</datalist>
								</div>
							</div>
						</div>
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
