import React from 'react';
import Logo from '../../assets/logo.png';
import './logInAndRegister.css';

function LogoAndGreeting () {
    return(
        <div className='logoAndGreeting'>
            <div className='logo'>
                <img src= {Logo} alt='logo' />
            </div>
            <div className='greeting'>
                <h1>Bienvenida</h1>
            </div>
        </div>
    )
}
export default LogoAndGreeting;