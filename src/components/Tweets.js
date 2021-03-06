import React from 'react';
import Tweet from './Tweet';
import {connect} from 'react-redux';
import getActiveAccount from '../selector/getActiveAccount';
import {scrollDirection} from '../animation/scroll'
class Tweets  extends React.Component{
    
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
                let tweets = document.getElementById('tweets');
               
                scrollDirection(tweets,'top',600,400);
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }
        } 
        
           
        
    }
    
    
   
    

    render(){
       
        return ( 
            <div className="twitter-feeds_container" >
                <div className="title tweet">Tweets of {this.state.activeAccount}</div> 
                <div className="tweets" id="tweets"> 
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

export default connect(mapStateToProps)(Tweets);