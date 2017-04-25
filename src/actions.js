

const propertiesActions = {
  addProp: (data) => { return {type: 'ADD_PROP', payload: data} },
  addFave: (data) => { return {type: 'ADD_FAVE', payload: data} },
  delFave: (data) => { return {type: 'DEL_FAVE', payload: data} }
};

export default propertiesActions;
