import React, {Component} from 'react';
import { Route,BrowserRouter as Router,Switch } from  'react-router-dom';
import Home from '../pages/home/home';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function Routes() {
    return(
            <Router>
                        <div>
                            
                            <Header/>
                        
                            
                        </div>
                            <Switch>
                            
                                    <Route exact path="/" component={Home}/>
                                    
                                
                            </Switch>
                    
                        <div>
                        <Footer/>
                        </div>
            
          </Router>

    );
}

export default Routes;

