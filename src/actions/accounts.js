
let postAccounts = (accounts)=>{
   return({type:"POST_ACCOUNTS",accounts})
}
export const postaccounts = (accounts)=>{
    return({type:"POST_ACCOUNTS",accounts})
}

export const setactiveaccount = (id)=>{
    return ({type:"SET_ACTIVE_ACCOUNT",id})
}
export const addaccount = (name)=>{
    let account = {id : Math.random() , name , active : false}
    return ({type:"ADD_ACCOUNT",account})
}
export const removeaccount = (id)=>{
    return ({type:"REMOVE_ACCOUNT",id})
}

export const setinactiveaccount = ()=>{
    return ({type:"SET_INACTIVE_ACCOUNT"})
}
   


