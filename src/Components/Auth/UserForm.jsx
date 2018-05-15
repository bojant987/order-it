import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, Container, Message} from 'semantic-ui-react';

import AuthLanding from './AuthLanding';
import Logo from '../Shared/Logo';
import SimpleInput from '../Shared/Input';
import SimpleForm from '../Shared/Form';
import validators from '../../Util/validators';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    static propTypes = {
        handleSubmit: PropTypes.func,
        formMode: PropTypes.string,
        clearFormStatus: PropTypes.func,
        formError: PropTypes.any,
        formSuccess: PropTypes.any,
        isLoading: PropTypes.bool,
        accountActivated: PropTypes.bool,
    };

    handleInputChange = (name, value) => {
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        const params = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.handleSubmit(params);
    };

    render() {
        const {
            formMode,
            formError,
            formSuccess,
            isLoading,
            accountActivated,
            clearFormStatus,
        } = this.props;

        return (
            <AuthLanding
                pageClassName={formMode === 'login' ? "LoginPage" : "SignUpPage"}
                className={formMode === 'login' ? "Login" : "SignUp"}
                clearFormStatus={clearFormStatus}
            >
                {accountActivated
                && <Message
                    success
                    header="Account activated!"
                    content="You can now proceed with your first login!"
                />}
                <SimpleForm
                    onSubmit={this.handleSubmit}
                    formError={formError}
                    formErrorHeader={formMode === 'login' ? "Login failed" : "Sign up failed"}
                    formSuccessHeader="All signed up!"
                    formSuccess={formSuccess}
                >
                    <div className="h-textRight h-marginB--lg">
                                <span>
                                    {formMode === 'login' ? "New here? " : "Already have an account? "}
                                </span>
                        <Link
                            to={formMode === 'login' ? "/signup" : "/login"}
                            className="ui primary button"
                        >
                            {formMode === 'login' ? "Sign up" : "Login"}
                        </Link>
                    </div>

                    <h2 className="h-marginB--md">
                        {formMode === 'login' ? "Login" : "Sign up"}
                    </h2>

                    <SimpleInput
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleInputChange}
                        validation={validators.email}
                    />

                    <SimpleInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleInputChange}
                        validation={validators.password}
                    />

                    {formMode === 'login'
                    && <div className="h-textRight h-marginT--lg">
                        <span>Forgot password? </span>
                        <Link to="/forgotpassword">Click here</Link>
                    </div>}

                    <Button primary type="submit" loading={isLoading}>
                        {formMode === 'login' ? "Login" : "Sign up"}
                    </Button>

                </SimpleForm>
            </AuthLanding>
        );
    }
}