import React from 'react';
import {shallow, mount} from 'enzyme';

import Form from '../src/Components/Shared/Form';
import SimpleInput from '../src/Components/Shared/Input';

describe('Form', () => {

    test('maps input children and assigns refs', () => {
        const compProps = {
            onSubmit: () => {},
        };

        const component = mount(
            <Form {...compProps}>
                <span />
                <SimpleInput type="text" name="input1" />
                <SimpleInput type="text" name="input1" />
                <div />
            </Form>
        );

        expect(component.instance().fields.length).toBe(2);

    });

    test('shows error message if passed', () => {
        const compProps = {
            onSubmit: () => {},
            formError: 'Error occurred',
            formErrorHeader: 'Whoa!',
            children: [],
        };

        const component = mount(<Form {...compProps} />);

        expect(component.find('.error.message').length).toBe(1);

    });

    test('shows success message if passed', () => {
        const compProps = {
            onSubmit: () => {},
            formSuccess: 'Error occurred',
            formSuccessHeader: 'Whoa!',
            children: [],
        };

        const component = mount(<Form {...compProps} />);

        expect(component.find('.success.message').length).toBe(1);

    });

    test('doesn\'t call onSubmit if there are invalid inputs', () => {
        const spy = jest.fn();
        const compProps = {
            onSubmit: spy,
        };

        const component = mount(
            <Form {...compProps}>
                <span />
                <SimpleInput
                    type="text"
                    name="input1"
                    validation={value => ({
                        isValid: value.length > 5,
                        errorMessage: 'asdads'
                    })}
                />
                <SimpleInput
                    type="text"
                    name="input1"
                    validation={value => ({
                        isValid: value.length > 5,
                        errorMessage: 'asdads'
                    })}
                />
                <div />
            </Form>
        );

        component.find('input').at(0).simulate('change', { target: { name: 'input1', value: 'asdasd' } });
        component.find('input').at(1).simulate('change', { target: { name: 'input2', value: 'asd' } });

        component.instance().handleSubmit();

        expect(spy).toHaveBeenCalledTimes(0);

    });

    test('calls onSubmit if all inputs are valid', () => {
        const spy = jest.fn();
        const compProps = {
            onSubmit: spy,
        };

        const component = mount(
            <Form {...compProps}>
                <span />
                <SimpleInput
                    type="text"
                    name="input1"
                    validation={value => ({
                        isValid: value.length > 5,
                        errorMessage: 'asdads'
                    })}
                />
                <SimpleInput
                    type="text"
                    name="input1"
                    validation={value => ({
                        isValid: value.length > 5,
                        errorMessage: 'asdads'
                    })}
                />
                <div />
            </Form>
        );

        component.find('input').at(0).simulate('change', { target: { name: 'input1', value: 'asdasdasd' } });
        component.find('input').at(1).simulate('change', { target: { name: 'input2', value: 'asdasdasd' } });

        component.instance().handleSubmit();

        expect(spy).toHaveBeenCalledTimes(1);

    });

});