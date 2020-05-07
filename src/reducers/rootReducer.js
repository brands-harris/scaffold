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
