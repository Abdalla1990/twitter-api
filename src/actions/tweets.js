import readFeeds from '../components/tools/readFeeds';

export const posttweets = (name) => {
    return  (dispatch , getState) => {
        return readFeeds(name).then((response)=>{
            let tweets = response.data;
            let state = getState();
            if(state.tweets === tweets){
                return
            }
            dispatch(postTweets(tweets))  ;
        });
    };
}


const postTweets = (tweets)=>{
   
    return({type:"POST_TWEETS",tweets})
    
    
}
   


