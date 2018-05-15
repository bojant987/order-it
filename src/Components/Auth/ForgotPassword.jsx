import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

import { clearFormStatus } from '../../Redux/actions/clearFormStatus';
import { forgotPassword } from '../../Redux/actions/auth/forgotPassword';
import AuthLanding from './AuthLanding';
import SimpleInput from '../Shared/Input';
import SimpleForm from '../Shared/Form';
import validators from '../../Util/validators';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
        };
    }

    static propTypes = {
        forgotPassword: PropTypes.func,
        clearFormStatus: PropTypes.func,
        errorMessage: PropTypes.string,
        successMessage: PropTypes.string,
        isLoading: PropTypes.bool,
    };

    handleSubmit = () => {
        this.props.forgotPassword({ email: this.state.email });
    };

    handleInputChange = (name, value) => {
        this.setState({ [name]: value });
    };

    render() {
        const { errorMessage, successMessage, isLoading } = this.props;

        return (
            <AuthLanding
                pageClassName="ForgotPasswordPage"
                className="ForgotPassword"
                clearFormStatus={clearFormStatus}
            >
                <SimpleForm
                    onSubmit={this.handleSubmit}
                    formError={errorMessage}
                    formErrorHeader="Whoops!"
                    formSuccessHeader="Check your email!"
                    formSuccess={successMessage}
                >

                    <h2 className="h-marginB--md">
                        Forgot Password
                    </h2>

                    <SimpleInput
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleInputChange}
                        validation={validators.email}
                    />

                    <Button primary type="submit" loading={isLoading}>
                        Submit
                    </Button>

                </SimpleForm>
            </AuthLanding>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.passwordStatus.errorMessage,
        successMessage: state.passwordStatus.successMessage,
        isLoading: state.passwordStatus.isLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        forgotPassword: params => {
            return dispatch(forgotPassword(params));
        },
        clearFormStatus: () => {
            return dispatch(clearFormStatus());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);