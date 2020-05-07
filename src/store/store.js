//This is a simple file used to initialise your store.
//You will not need to change or adapt this file to use it with your app.
//If you need several reducers, rather use combineReducers in your rootReducer file
import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer.js';

const store = createStore(rootReducer);

export default store;
