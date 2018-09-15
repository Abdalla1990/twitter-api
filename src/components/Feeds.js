import React from 'react';
import Tweet from './Tweet';
import {connect} from 'react-redux';
import getActiveAccount from '../selector/getActiveAccount';
import readFeeds from './tools/readFeeds';
class Feeds  extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
           feeds : []
        }
    }
 
    componentDidUpdate = ()=>{
        
        
        if(this.props.activeAccount !== undefined){
            if(this.state.activeAccount !== this.props.activeAccount.name){
            
                this.setState(()=>({activeAccount:this.props.activeAccount.name}));
                
            }
        } 
        
           
        
    }
    
    
   
    

    render(){
       
        return ( 
            <div className="twitter-feeds_container">
                <div className="title">Feeds of {this.state.activeAccount}</div> 
                <div className="tweets"> 
                    {this.props.tweets.length !== 0 && <Tweet tweets={this.props.tweets}/>}
                </div>
            </div>
           
        )
    }     
    
    


}

const mapStateToProps = (state)=>{
    return {
        accounts : state.accounts,
        activeAccount : getActiveAccount(state.accounts),
        tweets : state.tweets
    }
}

export default connect(mapStateToProps)(Feeds);