import readFeeds from '../components/tools/readFeeds';
import { call,put, takeEvery } from 'redux-saga/effects';
import {RECEIVE_TWEETS_DATA,REQUEST_TWEETS_DATA,ERRO_TWEETS_DATA_FETCH} from '../actions/tweets';

function* sagaFetchTweets(action) {
    try {
        const response = yield call(readFeeds, action.data)
        let tweets = response.data;
        yield put({type: RECEIVE_TWEETS_DATA, tweets})
    } catch (error) {
        yield put({type: ERRO_TWEETS_DATA_FETCH})
    }
   
}
  

export default function* watchSagaFetchTweets() {
    yield takeEvery(REQUEST_TWEETS_DATA, sagaFetchTweets);
}