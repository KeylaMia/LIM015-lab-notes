import React from 'react';
import Navigator from './navigator';
import UserAndNewNote from './userAndNewNote';
import './home.css';

function Home (){
    return(
        <div className='containerHome'>
        <Navigator/>
        <UserAndNewNote/>
        <div>
            <h1>este es mi home </h1>
        </div>
        </div>
    );
}

export default Home