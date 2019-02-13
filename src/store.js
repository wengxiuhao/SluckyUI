// export default todos
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const initReducer = (state = {}, action) => {
    return state
}

const reducers = {
    initReducer
}

const addReducer = (reducer,name) => {
    reducers[name] = reducer
    console.log(reducers,reducer.name)
}

const updateReducer = (store) => {
    // console.log("RED")
    store.replaceReducer(combineReducers(reducers))
}

const getStore = () => {
    var reducerCollection = combineReducers(reducers)
    var loggerMiddleware = createLogger()
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducerCollection,
    /* preloadedState, */
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));
}

export {addReducer, getStore, updateReducer}
