//=================================================================================
//This is a simple file used to initialise your store.
//If you need several reducers, rather use combineReducers in your rootReducer file
//=================================================================================

import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer.js';

const store = createStore(rootReducer);

export default store;
