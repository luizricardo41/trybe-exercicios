const { combineReducers, createStore } = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,  
})

const ESTADO_INICIAL = {
  login: false,
  email: "",
  teste: 'Vai dar certo?',
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN": 
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const newReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "TESTE":
      return {
        ...state,
        teste: 'Deu certo',
      }
    default:
      return state;
  }
}

const testando = combineReducers({
  reducer,
  newReducer,
})

const store = createStore(testando);
// const store = Redux.createStore(reducer);

store.dispatch({
  type: 'TESTE',
})

store.dispatch(fazerLogin('luiz@email.com'))

const teste2 = store.getState().newReducer;

console.log(teste2.teste);
