// Core
import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import './theme/init';

import App from './navigation/App';
import {Provider} from 'react-redux';
import {store} from './init/store';
import {history} from './init/middleware/core';

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
		,
	document.getElementById('app'));
