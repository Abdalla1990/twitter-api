
let tweetsReducerDefaultState = [];


export default (state = tweetsReducerDefaultState, action) => {
    switch (action.type) {

        case 'POST_TWEETS':
        return action.tweets
        default:
            return state;
    }

};