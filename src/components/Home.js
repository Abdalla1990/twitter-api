import React from 'react';
import {setactiveaccount,setinactiveaccount} from '../actions/accounts';
import {connect} from 'react-redux';
import Feeds from './Feeds';
import getActiveAccount from '../selector/getActiveAccount';
import { dispatchRequestTweetsData } from '../actions/tweets';
import Accounts from './Accounts';
class Home  extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            accounts : props.accounts,
            activeAccount : ""
        }
    }
   
   

   
    

    render(){
        return ( 
        
            <div className="div-container home-wrapper">
                <div className="accounts-menu_container">
                
                    <div className="twitter-accounts_container">
                        <div className="twitter_account"> <div className="title">Twitter Accounts</div></div>
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