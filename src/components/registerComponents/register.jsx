import React, {Component} from 'react';
import LogoAndGreeting from '../logInComponents/logoAndGreeting';
import FormRegister from './formRegister';

class Register extends Component {
    render(){
        return(
            <div>
            <LogoAndGreeting/>
            <FormRegister/>
            </div>
        )
    }
}
export default Register;