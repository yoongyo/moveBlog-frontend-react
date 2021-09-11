import React from 'react';
import { DrawerNavigation } from '../drawerNavigation'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="border-b p-5 border-gray-200">
            <div className="absolute">
                <DrawerNavigation/>
            </div>
            <div className="text-center sm:max-w-4xl sm:mx-auto sm:text-left">
                <Link className="text-xl sm:text-2xl font-bold box-content" to="/">MOVE <small style={{color: '#c0c0c0', 'fontWeight': 500}}>기술블로그</small></Link>
            </div>
        </div>
    )
}

export default Header;
