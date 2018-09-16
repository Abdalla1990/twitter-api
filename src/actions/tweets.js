import readFeeds from '../components/tools/readFeeds';
export const REQUEST_TWEETS_DATA = "REQUEST_TWEETS_DATA"
export const RECEIVE_TWEETS_DATA = "RECEIVE_TWEETS_DATA"
export const ERRO_TWEETS_DATA_FETCH = "ERRO_TWEETS_DATA_FETCH";
export const TWEETS_DATA_PENDING = "TWEETS_DATA_PENDING";
export const dispatchRequestTweetsData = (data)=>({type : REQUEST_TWEETS_DATA,data});
export const dispatchReceiveTweetsData = (data)=>({type : REQUEST_TWEETS_DATA,data});
export const dispatchTweetsDataPending = ()=>({type : TWEETS_DATA_PENDING});




