import React from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';

export default class SimpleInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isValid: true,
            errorMessage: null,
        };
    }

    static propTypes = {
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        validation: PropTypes.func,
        onFocus: PropTypes.func,
        errorMessage: PropTypes.string,
    };

    static defaultProps = {
        onChange: () => {},
        onFocus: () => {},
        validation: () => ({
            isValid: true,
            errorMessage: null,
        }),
    };

    validateInput = () => {
        const { isValid, errorMessage } = this.props.validation(this.state.value);

        this.setState({
            isValid,
            errorMessage,
        });

        return isValid;
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ value });

        this.props.onChange(name, value);
    };

    clearError = event => {
        this.setState({
            isValid: true,
        });

        this.props.onFocus(event);
    };

    render() {
        const {
            disabled,
            type,
            placeholder,
            name,
            errorMessage,
            onChange,
            onFocus,
            validation,
            ...rest
        } = this.props;

        return (
            <Form.Field disabled={disabled}>
                <Form.Input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={this.handleInputChange}
                    onFocus={this.clearError}
                    {...rest}
                />
                {!this.state.isValid
                && <Message
                    error
                    content={`* ${errorMessage || this.state.errorMessage}`}
                    className="InputError"
                />}
            </Form.Field>
        );
    }
}