import React from 'react';
import {setactiveaccount,setinactiveaccount, addaccount,removeaccount} from '../actions/accounts';
import {connect} from 'react-redux';
import { posttweets } from '../actions/tweets';
import {add_src,remove_src} from '../../server/keys';
class Accounts  extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            accounts : props.accounts,
            activeAccount : "",
            account : "@"
        }
    }
   
   
    setActiveAccount = (account)=>{
        this.setState(()=>({
            activeAccount : account.name
        }))
        this.props.dispatch(setinactiveaccount());
        this.props.dispatch(setactiveaccount(account.id));
        this.props.dispatch(posttweets(account.name));
       
        
    }

    handleFormValueChange = (event)=>{
        console.log('key , value ', "account" , event.target.value )
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
       
        this.props.dispatch(removeaccount(id))
       
        
        
       
    }
    render(){
        return ( 
            
            <div>
                {this.props.accounts.map((account)=>(
                    <div key={account.id} className="twitter_account"> 
                        <div className="action">
                            <div onClick={()=>this.setActiveAccount(account)}>{account.name}</div>
                            <img className="svg_icon icon" src={remove_src} onClick={()=>this.handleRemoveAccount(account.id)}></img>
                        </div>
                        
                    </div>)
                )}
                <div className="twitter_account">
                    <div className="action"> 
                        <input className="input_field" value={this.state.account} type="text" onChange={this.handleFormValueChange}/>
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