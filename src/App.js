import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FormLogIn from './components/logInComponents/formLogIn';
import Home from './components/home/home';
import Error from './components/error';
import FormRegister from './components/registerComponents/formRegister';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <FormLogIn/>
        </Route>
        <Route path='/register' exact>
          <FormRegister/>
        </Route>
        <Route path='/home' exact>
          <Home/>
        </Route>
        <Route path=''>
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
