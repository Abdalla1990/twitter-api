
import {Route,Switch,BrowserRouter } from 'react-router-dom'
import {Redirect} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Home from '../components/Home';

import loadAppDefaultState from '../components/tools/loadAppDefaultState'
class AppRouter extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
           defaultAccount :{}
        }
        
    }

    componentWillMount = ()=>{
       loadAppDefaultState(this.props.dispatch)
    }

    render(){
       
        return (
            <BrowserRouter >
                <div className="app-container" >
                     
                     <div id="component-container" className="component-container" >
                        
                        <Route  render={()=>{

                            return( 
                                <Switch>
                                    <Route  path="/" component={Home} exact={true}/> 
                                    <Route  render={()=>(<div>Not Found Page</div>)}/>
                                    <Redirect push to={"/"}/>
                                </Switch>
                            )
                        }}/>
 
                    </div>
                </div>
            </BrowserRouter>
        
        )
    }
} ;


export default connect()(AppRouter);
