import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';


export default (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancers = [];

    const devToolsExtension = window.devToolsExtension;
    if(__DEV__) {
        const logger = require('redux-logger').createLogger;
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
        middlewares.push(logger());
    }
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    );
    sagaMiddleware.run(rootSaga); 
    return store;
}






