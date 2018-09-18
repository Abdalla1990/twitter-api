import React from 'react';
import readFeeds from './tools/readFeeds';
import {img_src} from './tools/keys';


    const Tweet = ({tweets}) =>{
       
        return tweets.map((tweet,index)=>{
            return( 
                
                    <div key={index} className="tweet-container">
                        <div>{tweet.text}</div>
                    
                        {tweet.link !== undefined && 
                        <div className="view-tweet_button twitter_account">
                            <div className="action view-tweet_button_action ">
                                <img className="svg_icon" src={img_src}></img>
                                    <a href={tweet.link} target="blank">View Tweet</a>
                            </div>
                        </div>}
                    </div>)
        })
    }     
    
    
export default Tweet