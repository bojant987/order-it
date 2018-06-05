import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { login } from '../../Redux/actions/auth/login';
import { clearFormStatus } from '../../Redux/actions/clearFormStatus';
import UserForm from './UserForm';

export class _Login extends React.Component {
	static propTypes = {
		login: PropTypes.func,
		errorMessage: PropTypes.any,
		clearFormStatus: PropTypes.func,
		isLoading: PropTypes.bool,
		history: PropTypes.object,
		location: PropTypes.object,
	};

	static defaultProps = {
		login: () => {},
		clearFormStatus: () => {},
		history: {},
		location: { search: '' },
	};

	redirectToHome = () => {
		this.props.history.replace('/');
	};

	render() {
		const accountActivated =
			this.props.location.search.split('=')[0] === '?accActivated' && !!this.props.location.search.split('=')[1];

		return (
			<UserForm
				handleSubmit={this.props.login.bind(null, this.redirectToHome)}
				formMode="login"
				formError={this.props.errorMessage}
				clearFormStatus={this.props.clearFormStatus}
				isLoading={this.props.isLoading}
				accountActivated={accountActivated}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		errorMessage: state.loginStatus.errorMessage,
		isLoading: state.loginStatus.isLoading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: (redirectCallback, params) => {
			return dispatch(login(redirectCallback, params));
		},
		clearFormStatus: () => {
			return dispatch(clearFormStatus());
		},
	};
};

const Login = connect(mapStateToProps, mapDispatchToProps)(_Login);

export default withRouter(Login);
