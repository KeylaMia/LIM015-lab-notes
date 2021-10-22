import React from 'react';
import { Component } from 'react';
class FormLogIn extends Component {
    render(){
        return(
            <div className='form' >
            <label htmlFor="usr"><b>Nombre de Usuario o email</b></label>
            <input type="text" id="usr" required/>

            <label htmlFor="pass"><b>Contraseña</b></label>
            <input type="password" id="pass" required/>
            </div>
        )
    }
}
export default FormLogIn