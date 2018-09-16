import readJson from './readJson';
import {postaccounts,setactiveaccount} from '../../actions/accounts';
import {dispatchRequestTweetsData} from '../../actions/tweets';
export default (dispatch)=>{
    readJson().then((res)=>{
        console.log('here i am ', res);
        let accounts = res.data.data;
        if(accounts.length !== 0){
            // set the first account to be the default and fetch its tweets.
            let name = accounts[0].name;
            
            dispatch(postaccounts(accounts)); 
            dispatch(setactiveaccount(accounts[0].id));
            dispatch(dispatchRequestTweetsData(name));
        }
    })

}