import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signUp } from '../../Redux/actions/auth/signup';
import { clearFormStatus } from '../../Redux/actions/clearFormStatus';
import UserForm from './UserForm';

export class SignUp extends React.Component {
	static propTypes = {
		signUp: PropTypes.func,
		errorMessage: PropTypes.any,
		clearFormStatus: PropTypes.func,
		successMessage: PropTypes.any,
		isLoading: PropTypes.bool,
	};

	static defaultProps = {
		signUp: () => {},
		clearFormStatus: () => {},
	};

	render() {
		return (
			<UserForm
				handleSubmit={this.props.signUp}
				formMode="signup"
				formError={this.props.errorMessage}
				formSuccess={this.props.successMessage}
				clearFormStatus={this.props.clearFormStatus}
				isLoading={this.props.isLoading}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		errorMessage: state.signUpStatus.errorMessage,
		successMessage: state.signUpStatus.successMessage,
		isLoading: state.signUpStatus.isLoading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signUp: params => {
			return dispatch(signUp(params));
		},
		clearFormStatus: () => {
			return dispatch(clearFormStatus());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
