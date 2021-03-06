import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Overview from './containers/Overview';
import Header from './components/Header';
import ComponentTestRedux from './components/ComponentTestRedux';
import store from "./store"

ReactDOM.render(
	<Provider store={store}>
		<div className="App">
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path = '/' component={Overview} />
					<Route exact path = '/prueba' component={ComponentTestRedux} />
				</Switch>
			</BrowserRouter>
		</div>
	</Provider>, document.getElementById('root')
);
registerServiceWorker();
