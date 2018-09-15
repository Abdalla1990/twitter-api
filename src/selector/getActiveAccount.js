export default (accounts)=>{
    return accounts.find((account)=>account.active == true)
}