import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {Button} from 'semantic-ui-react';

import { clearFormStatus } from '../../Redux/actions/clearFormStatus';
import { resetPassword } from '../../Redux/actions/auth/resetPassword';
import AuthLanding from './AuthLanding';
import SimpleInput from '../Shared/Input';
import SimpleForm from '../Shared/Form';
import validators from '../../Util/validators';

export class _ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
        };
    }

    static propTypes = {
        resetPassword: PropTypes.func,
        clearFormStatus: PropTypes.func,
        errorMessage: PropTypes.string,
        successMessage: PropTypes.string,
        isLoading: PropTypes.bool,
        location: PropTypes.object,
    };

    handleSubmit = () => {
        const passwordResetID = this.props.location.search.split('signature=')[1];

        this.props.resetPassword({
            password: this.state.password,
            passwordResetID,
        });
    };

    handleInputChange = (name, value) => {
        this.setState({ [name]: value });
    };

    render() {
        const { errorMessage, successMessage, isLoading } = this.props;

        return (
            <AuthLanding
                pageClassName="PasswordResetPage"
                className="PasswordReset"
                clearFormStatus={clearFormStatus}
            >
                <SimpleForm
                    onSubmit={this.handleSubmit}
                    formError={errorMessage}
                    formErrorHeader="Whoops!"
                    formSuccessHeader="Password reset successful!"
                    formSuccess={successMessage}
                >

                    <h2 className="h-marginB--md">
                        Enter new password
                    </h2>

                    <SimpleInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleInputChange}
                        validation={validators.password}
                    />

                    {!!successMessage
                    && <div className="PasswordReset__loginLink h-textRight h-marginT--lg">
                        <Link to="/login">Go to login</Link>
                    </div>}

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
        resetPassword: params => {
            return dispatch(resetPassword(params));
        },
        clearFormStatus: () => {
            return dispatch(clearFormStatus());
        }
    };
};

const ResetPassword = connect(mapStateToProps, mapDispatchToProps)(_ResetPassword);

export default withRouter(ResetPassword);