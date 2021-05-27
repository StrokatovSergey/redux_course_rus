// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Instruments
import './theme/init';

// Intro
import App from './navigation/App';

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app'));
