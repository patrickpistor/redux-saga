import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from "redux-saga";


export const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
    const enhancer = applyMiddleware(sagaMiddleware)
    return createStore(rootReducer, initialState, enhancer)
}
