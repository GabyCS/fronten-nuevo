import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import	promise from "redux-promise-middleware";
import pruebasReducer from "./reducers/pruebasReducers";

export default createStore(
	
	combineReducers(
		{
			pruebasReducer,

		}
	), 
	{}, 
	applyMiddleware(logger, thunk , promise())
);