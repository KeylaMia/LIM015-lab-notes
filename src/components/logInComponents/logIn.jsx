import React from 'react';
import { Component } from 'react';
import LogoAndGreeting from './logoAndGreeting';
import FormLogIn from './formLogIn';

class LogIn extends Component {
    render(){
        return(
            <div className="container">
                <LogoAndGreeting/>
                <FormLogIn/>
            </div>
        )
    }
}
export default LogIn;