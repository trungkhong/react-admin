import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
// import promiseMiddleware from 'redux-promise';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStage(state) {
    try {
        const serializeState = localStorage.getItem(state)
        if (serializeState === null) {
            return undefined
        }
        return JSON.parse(serializeState)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const persistedState = loadFromLocalStage('state')

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))
);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;