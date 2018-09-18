import readJson from './readJson';
import {postaccounts,setactiveaccount} from '../../actions/accounts';
import {dispatchRequestTweetsData} from '../../actions/tweets';
import dispatcher from './dispatcher';
export default (dispatch)=>{
   
    readJson().then((res)=>{
        let accounts = res.data.data;
        console.log('accounts : ', accounts)
        if(accounts.length !== 0){
            let name = accounts[0].name;
            dispatcher(dispatch,postaccounts,accounts)
            .then(dispatcher(dispatch,setactiveaccount,accounts[0].id))
            .then(dispatcher(dispatch,dispatchRequestTweetsData,name))
            .catch((e)=>console.warn(e));
        }
    })

}