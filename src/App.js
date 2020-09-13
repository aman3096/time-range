import React from 'react';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import First from './components/First';
import Second from './components/Second';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Switch>
        <Route exact path="/"><First/></Route>     
        
        <Route exact path="/home"><First/></Route>
        </Switch>
    
    </Router>
    </>
    // <>
    //   <Base/>
    // </>
  );
}

export default App;
