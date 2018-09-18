import React from 'react';
import {setactiveaccount,setinactiveaccount, addaccount,removeaccount} from '../actions/accounts';
import {connect} from 'react-redux';
import { dispatchRequestTweetsData,dispatchTweetsDataPending } from '../actions/tweets';
import {add_src,remove_src} from './tools/keys';
import dispatcher from './tools/dispatcher';
class Accounts  extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            accounts : this.props.accounts,
            activeAccount : "",
            account : "@"
        }
    }
   
   
    setActiveAccount = (account)=>{
        if(account.name == this.state.activeAccount){
            return;
        }
        this.setState(()=>({
            activeAccount : account.name
        }))
        
        dispatcher(this.props.dispatch,setinactiveaccount)
        .then(dispatcher(this.props.dispatch,dispatchTweetsDataPending,account.name))
        .then(dispatcher(this.props.dispatch,dispatchRequestTweetsData,account.name))
        .then(dispatcher(this.props.dispatch,setactiveaccount,account.id))
        .catch((e)=>console.warn(e));
       
    }

    handleFormValueChange = (event)=>{
       
        let stateValue = event.target.value.replace(/\s/g, '');
        if(stateValue.indexOf('@') === -1){
            stateValue = "@" + stateValue;
        }
        this.setState(()=>({account:stateValue}))
    }

    handleAddAccount = ()=>{
       
        if(this.state.account!=="@"){
            this.props.dispatch(addaccount(this.state.account));
            setTimeout(() => {
                this.setState(()=>({account:"@"}))
            }, 200);
        }
       
    }
    handleRemoveAccount = (id)=>{
       
        if(id !== undefined){
            this.props.dispatch(removeaccount(id))
        }
 
    }
    setNextActiveAccount =()=>{
        let activeAcountIndex;
        this.props.accounts.map((account,index)=>{
            if(account.active == true){
                activeAcountIndex = index;
            }
        })
        activeAcountIndex+1 == this.props.accounts.length ? this.setActiveAccount(this.props.accounts[0]) : this.setActiveAccount(this.props.accounts[activeAcountIndex+1]) 
    }

    LoadAccounts = ()=>(
        this.props.accounts.map((account)=>(
            <div key={account.id} className="twitter_account"> 
                <div className={account.active == true ? "action active_account" : "action"} onClick={()=>this.setActiveAccount(account)}>
                    <div >{account.name}</div>
                    <img className="svg_icon icon" src={remove_src} onClick={()=>this.handleRemoveAccount(account.id)}></img>
                </div>
                
            </div>)
        )
    )
    render(){
        return ( 
            <div>
                <this.LoadAccounts />
                {this.props.accounts.length > 0 && 
                <div className="twitter_account">
                    <div className="action" onClick={this.setNextActiveAccount}>
                        <div >Next</div>
                    </div>
                </div>}
                <div className="twitter_account">
                    <div className="action"> 
                        <input className="input_field" placeholder="add a twitter account" value={this.state.account} type="text" onChange={this.handleFormValueChange}/>
                        <img className="svg_icon icon" src={add_src} onClick={this.handleAddAccount}></img>
                    </div>  
                </div>
            </div>
        )
           
    }     
    
    


}

const mapStateToProps = (state)=>{
    return {
        accounts : state.accounts
    }
}

export default connect(mapStateToProps)(Accounts)