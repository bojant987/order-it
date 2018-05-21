import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { activateAccount } from "../../Redux/actions/auth/activateAccount";

export class _ActivateAccount extends React.Component {
    static propTypes = {
        activateAccount: PropTypes.func,
        location: PropTypes.object,
        history: PropTypes.object,
    };

    componentDidMount() {
        const activationID = this.props.location.search.split('=')[1];

        this.props.activateAccount({activationID}, this.redirectCallback);
    }

    redirectCallback = () => {
        this.props.history.replace('/login?accActivated=true');
    };

    render() {
        return (
            <div />
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.loginStatus.errorMessage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        activateAccount: (params, callback) => {
            return dispatch(activateAccount(params, callback));
        },
    };
};

const ActivateAccount = connect(mapStateToProps, mapDispatchToProps)(_ActivateAccount);

export default withRouter(ActivateAccount);