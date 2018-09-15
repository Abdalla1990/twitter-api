import React from 'react';
import {setactiveaccount,setinactiveaccount} from '../actions/accounts';
import {connect} from 'react-redux';
import Feeds from './Feeds';
import getActiveAccount from '../selector/getActiveAccount';
import { posttweets } from '../actions/tweets';
import Accounts from './Accounts';
class Home  extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            accounts : props.accounts,
            activeAccount : ""
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

   
    

    render(){
        return ( 
        
            <div className="div-container home-wrapper">
                <div className="accounts-menu_container">
                
                    <div className="twitter-accounts_container">
                        <div className="twitter_account"> <div className="title">Twitter Feeds</div></div>
                        <Accounts />
                    </div> 
                </div>
                
                       
                <Feeds/>
                
            </div>
        )
    }     
    
    


}

const mapStateToProps = (state)=>{
    return {
        accounts : state.accounts
    }
}

export default connect(mapStateToProps)(Home)