import './App.css';
import React from 'react';
import $ from 'jquery'
import View from './View.js'
import companyLogo from './clipboard.png';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import home from './Home.js'
import Create from './Create.js'



function App() {
  localStorage.setItem('lang','English');
  $('#inputerror').toggle('show');
  return (
    <Router>
        <Switch> 
            <Route exact path="/:lang" component={home}/>
            <Route exact path="/:lang/create" component={Create}/>
            <Route exact path="/:lang/create/view" component={View}/>
        </Switch>
    </Router>
  );
}

export default App;
