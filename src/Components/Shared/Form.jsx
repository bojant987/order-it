import React from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';

export default class SimpleForm extends React.Component {
    constructor(props) {
        super(props);

        this.fields = [];
    }

    static propTypes = {
        onSubmit: PropTypes.func,
        formError: PropTypes.any,
        formSuccess: PropTypes.any,
        formErrorHeader: PropTypes.string,
        formSuccessHeader: PropTypes.string,
        children: PropTypes.any,
    };

    handleSubmit = () => {
        const fieldsValidState = this.fields.filter(Boolean).map(field => field.validateInput());

        if (fieldsValidState.every(Boolean)) {
            this.props.onSubmit();
        }
    };

    render() {
        const {
            children,
            onSubmit,
            formError,
            formErrorHeader,
            formSuccess,
            formSuccessHeader,
            ...rest
        } = this.props;

        return (
            <Form
                onSubmit={this.handleSubmit}
                error
                success
                {...rest}
            >
                {children.map(child => {
                    if (!child.type) {
                        return child;
                    }

                    return child.type.name === 'SimpleInput'
                        ? { ...child, ref: el => { this.fields.push(el) } }
                        : child;
                })}
                {!!formError
                && <Message
                    error
                    header={formErrorHeader}
                    content={formError}
                />}
                {!!formSuccess
                && <Message
                    success
                    header={formSuccessHeader}
                    content={formSuccess}
                />}
            </Form>
        );
    }
}