import React, {Component} from 'react';
import Logo from '../../assets/logo.png';


class LogoAndGreeting extends Component {
    render(){
        return(
            <div className='logoandGreeting'>
            <img src= {Logo} alt="logo" />
            </div>
        )
    }
}
export default LogoAndGreeting;