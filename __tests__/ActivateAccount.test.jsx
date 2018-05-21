import React from 'react';
import {shallow} from 'enzyme';

import { _ActivateAccount as ActivateAccount } from '../src/Components/Auth/ActivateAccount';

describe('ActivateAccount', () => {

    test('calls activateAccount on mount', () => {
        const spy = jest.fn();
        const compProps = {
            activateAccount: () => {},
            history: {},
            location: {
                search: '?activationID=123123123',
            }
        };

        const component = shallow(<ActivateAccount {...compProps} activateAccount={spy} />);

        expect(spy).toHaveBeenCalledTimes(1);

    });

    test('calls activateAccount with proper params', () => {
        const spy = jest.fn();
        const compProps = {
            activateAccount: () => {},
            history: {},
            location: {
                search: '?activationID=123123123',
            }
        };

        const component = shallow(<ActivateAccount {...compProps} activateAccount={spy} />);

        expect(spy).toHaveBeenCalledWith(
            { activationID: '123123123' },
            component.instance().redirectCallback
        );

    });

});