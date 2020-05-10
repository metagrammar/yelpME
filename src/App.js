import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Results from './components/Results';
import './App.css';
import RestaurantPage from './components/RestaurantPage';

function App() {
	
  return (
    <div>
      {/* <Home /> */}
	  <Switch>  
		  <Route exact path='/:city/:restaurant' render={props => <RestaurantPage {...props} />} />
		  <Route path='/:city' render={props => <Results {...props}/>} />
		  <Route exact path='/' render={props => <Home {...props}/>} />
	  </Switch>
    </div>
  );
}

export default App;