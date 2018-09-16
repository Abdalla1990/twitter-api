
let tweetsReducerDefaultState = [];
import {RECEIVE_TWEETS_DATA,ERRO_TWEETS_DATA_FETCH,TWEETS_DATA_PENDING} from '../actions/tweets'

export default (state = tweetsReducerDefaultState, action) => {
    
    switch (action.type) {

        
        case RECEIVE_TWEETS_DATA:
            return action.tweets
        case TWEETS_DATA_PENDING:
            return []
        case ERRO_TWEETS_DATA_FETCH:
            return [{text : "oops something went wrong! please check your connection"}]
        default:
            return state;
    }

};