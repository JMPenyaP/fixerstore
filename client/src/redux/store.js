import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Nos permite que nuestra app se conecte con la extension del navegador
 
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // Esta linea sirve para que podamos hacer peticiones a una API/servidor.
    
);  

export default store;