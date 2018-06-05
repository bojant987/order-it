import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { initScreenshot } from 'storybook-chrome-screenshot';

import 'semantic-ui-css/semantic.min.css';
import '../assets/styles/main.scss';

addDecorator(initScreenshot());

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
