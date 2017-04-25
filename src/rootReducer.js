import { combineReducers } from 'redux'

const initialStateProperties = {
  properties: [],
  isError: false
};

const propertiesReducer = (state = initialStateProperties, action) => {
  switch(action.type) {
    case 'ADD_PROP':
      return { ...state, properties: action.payload };
      break;
    default: return state;
  }
};

const initialStateFaves = {
  faves: []
};

const favesReducer = (state = initialStateFaves, action) => {
  switch(action.type) {
    case 'ADD_FAVE':
      return {
        ...state,
        faves: [ ...state.faves, action.payload]
      };
      break;
    case 'DEL_FAVE':
      debugger
      const newFaves = state.faves;
      newFaves.splice(action.payload, 1);
      return {
        ...state,
        faves: newFaves
      };
      break;
    default: return state;
  }
};

const rootReducer = combineReducers({
  propertiesReducer,
  favesReducer
});

export default rootReducer;
