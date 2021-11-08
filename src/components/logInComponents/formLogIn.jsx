import React from 'react';
import LogoAndGreeting from './logoAndGreeting';
import './logInAndRegister.css';

const FormLogIn = () => {
        return(
            <div className='container'>
            <LogoAndGreeting/>
            <form className='form' >
            <label htmlFor="usr"><b>Correo Electrónico:</b></label>
            <input type='text' id='usr' required/>

            <label htmlFor='pass'><b>Contraseña:</b></label>
            <input type='password' id='pass' required/>
            </form>
            <div className='form'>
            <button id='btnLogIn' className='btn'><a href='/home'>Iniciar Sesión</a></button>
            <p>¿No tienes cuenta? <a className='linkRegister' href='/register'>Regístrate</a></p>
            </div>
            </div>
        );
    };

export default FormLogIn