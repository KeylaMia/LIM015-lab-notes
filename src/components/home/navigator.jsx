import React, {Component} from 'react';
import Leave from '../../assets/leave.png';
import Search from '../../assets/search.png'
import Logo from '../../assets/logo.png';
import './home.css';

class Navigator extends Component {
    render(){
        return(
            <div className='navigatorContainer'>
                <div className='logoNavigator'>
                    <img src= {Logo} alt="logo"/>
                </div>
                <div className='search'>
                    <img id='imgSearch' src= {Search} alt='search'/>
                    <input id='searcher' placeholder='Buscar...' type='text'/>
                </div>
                <div className='leave'>
                    <img id='imgLeave'src= {Leave} alt='leave'/>
                    <li><a id='leave' href='/'>Cerrar Sesión</a></li>
                </div>
            </div>
        )
    }
}
export default Navigator;