import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootSaga from './root-saga'

import {persistStore} from 'redux-persist'

import rootReducer from './root-reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware] 

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

// export default {store, persistor} 