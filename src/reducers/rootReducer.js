//===================================================================================
//This is your root reducer. You can either keep all your state here, or make use of
//combineReducers, if you have lots of info and you want to keep it clean
//===================================================================================

//Import your actions
import * as actions from '../constants/actionTypes.js';

//Set your initialState
const initialState = {
  //propertyName: {
  //  propertyName: value
  //}
};

function rootReducer(state = initialState, action) {
  // if(action.type === actions.NAME) {
  //     return Object.assign({}, state, {
  //         property: state.parent.property = action.payload.property
  //     })
  // }

  return state;
}

export default rootReducer;
