import React from 'react';
import {IndexRoute} from 'react-router';
import {HashRouter, Route, Switch} from 'react-router-dom';

import AppContainer from './Components/AppContainer';

import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import ForgotPassword from './Components/Auth/ForgotPassword';
import ResetPassword from './Components/Auth/PasswordReset';
import ActivateAccount from './Components/Auth/ActivateAccount';

import Home from './Components/Home';
import Profile from './Components/Profile/Profile';

export default class Routes extends React.Component {
    render() {
        return (
            <div style={{width: "100%", height: "100%"}}>
                <HashRouter>
                    <Switch>
                        {/* User login */}
                        <Route path="/login">
                            <AppContainer
                                Component={Login}
                                requiresLogin={false}
                                hasHeaderAndFooter={false}
                            />
                        </Route>

                        {/* User signup */}
                        <Route path="/signup">
                            <AppContainer
                                Component={SignUp}
                                requiresLogin={false}
                                hasHeaderAndFooter={false}
                            />
                        </Route>

                        {/* User activate account */}
                        <Route path="/activate">
                            <AppContainer
                                Component={ActivateAccount}
                                requiresLogin={false}
                                hasHeaderAndFooter={false}
                            />
                        </Route>

                        {/* User forgot password */}
                        <Route path="/forgotpassword">
                            <AppContainer
                                Component={ForgotPassword}
                                requiresLogin={false}
                                hasHeaderAndFooter={false}
                            />
                        </Route>

                        {/* User reset password */}
                        <Route path="/resetpassword">
                            <AppContainer
                                Component={ResetPassword}
                                requiresLogin={false}
                                hasHeaderAndFooter={false}
                            />
                        </Route>

                        {/* Home */}
                        <Route path="/">
                            <AppContainer Component={Home} />
                        </Route>

                        {/* Profile */}
                        <Route path="/profile/:user?">
                            <AppContainer Component={Profile} />
                        </Route>

                    </Switch>
                </HashRouter>
            </div>
        );
    }
}
