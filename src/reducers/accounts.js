
let accountsReducerDefaultState = [];

import {POST_ACCOUNTS,SET_ACTIVE_ACCOUNT,SET_INACTIVE_ACCOUNT,ADD_ACCOUNT,REMOVE_ACCOUNT} from '../actions/accounts'
export default (state = accountsReducerDefaultState, action) => {
    switch (action.type) {

        case POST_ACCOUNTS:
            return [...action.accounts]
        case SET_ACTIVE_ACCOUNT:
        return state.map((account)=>{
            return action.id == account.id? {...account,active:true}:{...account,active:false} 
        })
        case SET_INACTIVE_ACCOUNT:
            return state.map((account)=>{
                return{...account,active:false}
            })
        case ADD_ACCOUNT:
            return [...state , action.account]
        case REMOVE_ACCOUNT:
            return (state.filter((account)=>account.id!== action.id));
        default:
            return state;
    }

};