import React from 'react';
import {shallow, mount} from 'enzyme';

import Input from '../src/Components/Shared/Input';

describe('Input', () => {

    test('shows error message if isValid is false', () => {
        const compProps = {
            type: 'text',
            name: 'input',
        };

        const component = shallow(<Input {...compProps} />);

        component.setState({ isValid: false });

        expect(component.find('.InputError').length).toBe(1);

    });

    test('calls onChange prop with proper params', () => {
        const spy = jest.fn();
        const compProps = {
            type: 'text',
            name: 'input',
        };

        const component = mount(<Input {...compProps} onChange={spy} />);

        component.find('input').simulate('change', { target: { name: 'input', value: 'asdasd' } });

        expect(spy).toHaveBeenCalledWith('input', 'asdasd');

    });

    test('gets validated properly', () => {
        const compProps = {
            type: 'text',
            name: 'input',
            validation: value => ({
                isValid: value.length > 5,
                errorMessage: 'Whoops!',
            }),
        };

        const component = shallow(<Input {...compProps} />);

        component.setState({ value: 'asd' });
        component.instance().validateInput();

        expect(component.state().isValid).toBe(false);
        expect(component.state().errorMessage).toBe('Whoops!');

    });

    test('clears error on input focus', () => {
        const compProps = {
            type: 'text',
            name: 'input',
            validation: value => ({
                isValid: value.length > 5,
                errorMessage: 'Whoops!',
            }),
        };

        const component = mount(<Input {...compProps} />);

        component.setState({ value: 'asd' });
        component.instance().validateInput();

        component.find('input').simulate('focus');

        expect(component.state().isValid).toBe(true);

    });

});