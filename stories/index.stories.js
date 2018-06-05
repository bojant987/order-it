import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { withScreenshot } from 'storybook-chrome-screenshot';

import Logo from '../src/Components/Shared/Logo';
import { _Login as Login } from '../src/Components/Auth/Login';
import { SignUp } from '../src/Components/Auth/SignUp';

storiesOf('Logo', module)
	.addDecorator(withScreenshot())
	.add('look, a logo', () => <Logo />);

storiesOf('Login', module)
	.addDecorator(StoryRouter())
	.addDecorator(withScreenshot())
	.add('with loading', () => <Login isLoading />)
	.add('with error message', () => <Login errorMessage="Ooops! Something went wrong." />)
	.add('with account activated', () => <Login location={{ search: '?accActivated=true' }} />);

storiesOf('SignUp', module)
	.addDecorator(StoryRouter())
	.addDecorator(withScreenshot())
	.add('with loading', () => <SignUp isLoading />)
	.add('with error message', () => <SignUp errorMessage="Ooops! Something went wrong." />)
	.add('with success message', () => <SignUp successMessage="Oh yeah!" />);
