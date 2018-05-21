import React from 'react';
import {shallow, mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { _AppContainer as AppContainer } from '../src/Components/AppContainer';
import  RouterAppContainer from '../src/Components/AppContainer';
import Home from '../src/Components/Home';

describe('AppContainer', () => {

    const compProps = {
        Component: Home,
        user: {},
        requiresLogin: true,
        hasHeaderAndFooter: true,
        isLoggedIn: true,
    };

    // test('shows local storage error if it is not available', () => {
    //     const component = mount(<AppContainer {...compProps} />);
    //
    //     const spy = jest.spyOn(component.instance(), 'localStorageEnabled');
    //     spy.mockReturnValue(false);
    //
    //     expect(component.find('.LocalStorageError').length).toBe(1);
    //
    //     spy.mockClear();
    //
    // });

    test('shows header and footer if hasHeaderAndFooter is true', () => {
        const component = mount(<AppContainer {...compProps} />);

        expect(component.find('.AppHeader').length).toBe(1);
        expect(component.find('.AppFooter').length).toBe(1);

    });

    test('shows component if user is logged in', () => {
        const component = mount(<AppContainer {...compProps} />);

        expect(component.find('.Home').length).toBe(1);

    });

    // test('doesn\'t show component if user is not logged in', () => {
    //     const component = mount(
    //         <MemoryRouter>
    //             <RouterAppContainer {...compProps} isLoggedIn={false} />
    //         </MemoryRouter>
    //     );
    //
    //     expect(component.find('.Home').length).toBe(0);
    //
    // });

    test('always shows component if login is not required', () => {
        const component = mount(<AppContainer {...compProps} requiresLogin={false} isLoggedIn={false} />);

        expect(component.find('.Home').length).toBe(1);
        expect(component.find('.AppHeader').length).toBe(1);
        expect(component.find('.AppFooter').length).toBe(1);

    });

});