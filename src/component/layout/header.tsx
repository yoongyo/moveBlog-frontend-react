import React from 'react';
import { DrawerNavigation } from '../drawerNavigation'
import { Link } from 'react-router-dom'
import BlackLogo from '../../img/blackLogo.png';

const Header = () => {
    const token = localStorage.getItem("token")

    return (
        <div className="border-b p-5 border-gray-200">
            {token &&
                <div className="absolute">
                    <DrawerNavigation/>
                </div>
            }
            <div className="sm:max-w-4xl sm:mx-auto sm:text-left">
                <a href="/" className="flex flex-row justify-center lg:justify-start">
                    <img src={BlackLogo} width={30}/>
                    <p className="text-xl sm:text-2xl font-bold box-content mx-2">MOVE</p> 
                    <p className="text-lg sm:text-lg font-bold self-center" style={{color: '#c0c0c0', 'fontWeight': 500}}>기술블로그</p>
                </a>
            </div>
        </div>
    )
}

export default Header;
