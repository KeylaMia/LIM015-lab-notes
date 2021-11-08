import React from 'react';
import Star from '../../assets/star.png';
import { userName } from '../registerComponents/formRegister';
import './home.css';

function UserAndNewNote (){
    return(
        <div className='userAndNewNote-container'>
            <div className='userGreeting'>
                <p>¡Hola ${userName}!</p>
                <img src={Star} alt='iconUser'/>
            </div>

            <div className='newNote'>
                <button id='newNote'> + Crear Nota </button>
            </div>

            <div className='notesHistory'>
            <hr/>
            <p>Mis Notitas</p>
            <hr/>
            </div>
        
        </div>
    );
}

export default UserAndNewNote