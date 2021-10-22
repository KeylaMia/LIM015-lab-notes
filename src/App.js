import { Component } from 'react';
import './App.css';
import LogIn from './components/logInComponents/logIn';
//import Register from './components/registerComponents/register';
//import Navigator from './components/navigator';


class App extends Component{
  render(){
    return (
      <div className="App">
      <LogIn/>
      </div>
    );
  } 
}

export default App;
