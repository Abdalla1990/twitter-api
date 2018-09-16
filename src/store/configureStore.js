import { createStore, combineReducers ,applyMiddleware} from 'redux';
import accounts_reducer from '../reducers/accounts';
import tweets_reducer from '../reducers/tweets';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../reducers/saga';

export default () => {
    // //persist data to localStorage
    const state = {} ;
    const sagaMiddleware = createSagaMiddleware()
    const reducers = combineReducers({
        accounts: accounts_reducer, 
        tweets: tweets_reducer
    });
    
    const store = createStore(reducers, state, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return store;
};