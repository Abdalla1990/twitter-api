const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const Twitter = require('twitter');
const env =require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get('/search',(req,res)=>{
    var client = new Twitter({
        consumer_key: env.parsed.oauth_consumer_key,
        consumer_secret: env.parsed.consumerSecret,
        access_token_key: env.parsed.oauth_token,
        access_token_secret: env.parsed.tokenSecret
    });
    // var params1 = {follow:'1041532963161137200,'};
    // client.stream('statuses/filter', {follow: '1041532963161137200,'}, function(stream) {
    //     stream.on('data', function(event) {
    //       console.log(event && event.text);
    //     });
       
    //     stream.on('error', function(error) {
    //     //   throw error;
    //     console.log('errrrror')
    //     });
    //   });

    

    


    
    var params = {screen_name:req.query['0'],count:100};
    
    client.get('statuses/user_timeline.json', params, (error, tweets, response) =>{
        if (!error) {
            
            var feeds = [];
            
            tweets.map((tweet)=>{ 
                // console.log(tweet);
                let tweetLinkPrefext = 'https://t.co/';
                let link ;
               
                if(tweet.text.indexOf(tweetLinkPrefext) > -1){
                    
                    let index = tweet.text.indexOf(tweetLinkPrefext);
                    link = tweet.text.slice(index);

                }
                
                feeds.push({text :tweet.text , link });
            })
            
            res.send(feeds).status(200);
        }else{
            
            res.send(error).status(404);
            
        }
    });
   
    
    




})

app.get('/*', (req, res) => {

    res.sendFile(publicPath + '/index.html');
    
    
});


app.listen(port, () => {
    console.log(`app is running on ${port}`);
})