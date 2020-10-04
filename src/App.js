import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import CompanyRegistration from  '../src/pages/companyRegistration/companyRegistration';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/company-register' component={CompanyRegistration}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
