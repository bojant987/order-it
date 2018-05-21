import React from 'react';
import {shallow, mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import UserForm from '../src/Components/Auth/UserForm';

describe('UserForm', () => {

    const compProps = {
        handleSubmit: () => {},
        formMode: 'login',
        clearFormStatus: () => {},
    };

    test('calls submit with proper params', () => {
        const spy = jest.fn();

        const component = shallow(<UserForm {...compProps} handleSubmit={spy} />);
        component.setState({ email: 'bojant987@hotmail.com', password: 'asdasdasd' });

        component.instance().handleSubmit();

        expect(spy).toHaveBeenCalledWith({
            email: 'bojant987@hotmail.com',
            password: 'asdasdasd',
        });

    });

    test('show account activated success message', () => {
        const component = mount(
            <MemoryRouter>
                <UserForm {...compProps} accountActivated />
            </MemoryRouter>
        );

        expect(component.find('.success.message').length).toBe(1);
        expect(component.find('.success.message .header').text()).toBe('Account activated!');

    });

    test('sets login form mode properly', () => {
        const component = mount(
            <MemoryRouter>
                <UserForm {...compProps} />
            </MemoryRouter>
        );

        expect(component.find('.LoginPage').length).toBe(1);

    });

    test('sets sign up form mode properly', () => {
        const component = mount(
            <MemoryRouter>
                <UserForm {...compProps} formMode="signup" />
            </MemoryRouter>
        );

        expect(component.find('.SignUpPage').length).toBe(1);

    });

});