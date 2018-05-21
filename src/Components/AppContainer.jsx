import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { IndexRoute, withRouter, Redirect } from 'react-router';
import { Message } from 'semantic-ui-react';

import AppHeader from './Header';
import AppFooter from './Footer';

const Aux = props => props.children;

export class _AppContainer extends React.Component {
    static propTypes = {
        Component: PropTypes.any,
        user: PropTypes.object,
        requiresLogin: PropTypes.bool,
        hasHeaderAndFooter: PropTypes.bool,
        isLoggedIn: PropTypes.bool,
    };

    static defaultProps = {
        requiresLogin: true,
        hasHeaderAndFooter: true,
    };

    localStorageEnabled = () => {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');

            return true;
        } catch(e) {
            return false;
        }
    };

    withLoginRedirect = Component => {
        const { isLoggedIn, requiresLogin } = this.props;

        if (requiresLogin) {
            return isLoggedIn ? <Component /> : <Redirect to="/login" />;
        }

        return <Component />;
    };

    // withAdminAccess = (Component, user) => {
    //     // auth mock, delete if not needed
    //     if (user && user.admin) {
    //         return <Component />;
    //     } else {
    //         return <Redirect to="/forbidden" />;
    //     }
    // };

    render() {
        const { hasHeaderAndFooter, requiresLogin, Component } = this.props;

        return this.localStorageEnabled() ? (
            <Aux>
                {hasHeaderAndFooter && this.withLoginRedirect(AppHeader)}
                {requiresLogin
                    ? <main>{this.withLoginRedirect(Component)}</main>
                    : <Component />}
                {hasHeaderAndFooter && this.withLoginRedirect(AppFooter)}
            </Aux>
        ) : (
            <main className="LocalStorageError">
                <Message
                    error
                    className="LocalStorageError__message h-textCenter"
                >
                    <img src="../../assets/img/error.gif" className="LocalStorageError__photo" />
                    <div className="header">Local storage unavailable</div>
                    <p>This app requires you to have cookies enabled. We use it to authenticate you and to save your preferences. Please enable it and refresh the page</p>
                </Message>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginStatus.isLoggedIn,
    };
};

const AppContainer = connect(mapStateToProps, null)(_AppContainer);

export default withRouter(AppContainer);