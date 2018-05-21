import React from 'react';
import {shallow} from 'enzyme';

import {_ResetPassword as ResetPassword} from '../src/Components/Auth/PasswordReset';

describe('ResetPassword', () => {

    const compProps = {
        resetPassword: () => {},
        clearFormStatus: () => {},
        location: {
            search: '?signature=123123123',
        },
    };

    test('calls submit with proper params', () => {
        const spy = jest.fn();

        const component = shallow(<ResetPassword {...compProps} resetPassword={spy} />);
        component.setState({password: 'asdasdasd'});

        component.instance().handleSubmit();

        expect(spy).toHaveBeenCalledWith({
            password: 'asdasdasd',
            passwordResetID: '123123123',
        });

    });

    test('shows link to login page on success', () => {
        const component = shallow(<ResetPassword {...compProps} successMessage="Done!" />);

        expect(component.find('.PasswordReset__loginLink').length).toBe(1);
    });

});