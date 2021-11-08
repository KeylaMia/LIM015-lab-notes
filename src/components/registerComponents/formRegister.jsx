import React, {useState} from 'react';
import LogoAndGreeting from '../logInComponents/logoAndGreeting';
import '../logInComponents/logInAndRegister.css';

function FormRegister () {
    const[userName, setName] = useState('');
    const[userEmail, setEmail] = useState('');

    return(
        <div className='container'>
        <LogoAndGreeting/>
        <div>
            <form className='form' >
                <label htmlFor="userName"><b>Nombre de Usuaria:</b></label>
                <input 
                type="text" 
                id="userName" 
                name='userName' 
                value={userName} required
                onChange={(e)=> setName(e.target.value)}
                />

                <label htmlFor="email"><b>Correo Electrónico:</b></label>
                <input 
                type="text" 
                id="email" 
                name='userEmail' 
                value={userEmail} required
                onChange={(e)=> setEmail(e.target.value)}
                />

                <label htmlFor="newPassword"><b>Nueva Contraseña:</b></label>
                <input 
                type="password" 
                id="newPassword" 
                name='userPassword' required/>

                <label htmlFor="confirPassword"><b>Confirma Contraseña:</b></label>
                <input type="password" id="confirPassword" required/>
            </form>
        </div>
        <div>
            <button className='btn' id='btnRegister'><a href='/'>Registrarme</a></button>
        </div>
        </div>
        )
    
}

export const userName= document.getElementById('userName');

export default FormRegister;