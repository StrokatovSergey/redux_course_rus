// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './theme/init';

import App from './navigation/App';
import {Provider} from 'react-redux';
import {store} from './basic-redux/init/store';

render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
		,
	document.getElementById('app'));
