import readJson from './readJson';
import {postaccounts,setactiveaccount,setinactiveaccount} from '../../actions/accounts';
import {posttweets} from '../../actions/tweets';
import readFeeds from './readFeeds';
export default (dispatch)=>{
    readJson().then((res)=>{
        console.log('here i am ', res);
        let accounts = res.data.data;
        if(accounts.length !== 0){
            // set the first account to be the default and fetch its tweets.
            dispatch(postaccounts(accounts)); 
            dispatch(setactiveaccount(accounts[0].id));
            dispatch(posttweets(accounts[0].name));
            
        }
    })

}