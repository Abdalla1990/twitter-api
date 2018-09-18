# Twitter Api Interface

Demo On Heroku : https://serene-gorge-80398.herokuapp.com/

this is a twitter api interface, 
you can do the following : 
  - add a twitter account
  - view the tweets of selected account


### todo
- provide an interface to the number of tweets displayed
- enable realtime watch for tweets / hashtags or keywords.
- Provide an interface for filtering tweets based on date , keywords or number of likes/retweets.


### How To Use It :

In package.json : 

| script | Job |
| -------------------- | ------ |
| hotload-api | loads the api and watches for changes
| start | start the node server 'no hot reload'
| dev-server | loads the front-end ONLY , no interaction withthe api|
| dev_api | loads the front-end and the backend and watches for changes on both 'this might through Error: listen EADDRINUSE :::3000 sometime but it won't block the processes' |
| build:dev | prepares a build bundle.js file
| build:dev | prepares a bundle.js.map file for deployment
| heroku-postbuild | used by Heroku to build the app upon deployment

1- `git clone` the repo https://github.com/Abdalla1990/twitter-api.git

2- `cd` to the folder of the app 

3- run `npm install` to install the `node_modules`

4- run `npm run dev_api` for development and go to `http://localhost:8080/` 

### alternitavely : 


###### if you want to load only the front-end 'no tweets will load' : 

5- run `npm run dev-server` 

###### if you want to make a development build , run it on "express"(the backend) : 

6- run `npm run build:dev` and then `npm run hotload-api` or `npm run start` 

###### if you want to make a deployment build : 

7- run `npm run build:prod` 

### Note : 

webpack uses `dev-server` for front-end development flow , and it uses `proxy` to direct all routes coming from the backend to its port `8080`. 