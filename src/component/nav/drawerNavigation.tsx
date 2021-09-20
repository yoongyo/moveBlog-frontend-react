import React, {useState} from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getCookie } from '../cookie/cookie';

const DrawerStyle:React.CSSProperties = {
    'backgroundColor': '#2A3F54'
}


export const DrawerNavigation = () => {

    const jwt = getCookie('jwt');

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <button onClick={toggleDrawer} className="p-1"><FontAwesomeIcon icon={faBars} size="lg"/></button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={DrawerStyle}>
                <div className="p-8 border-b border-gray-600">
                    <h1 className="text-fakeWhite">MOVE 게시판</h1>
                </div>
                <nav className="text-fakeWhite">
                    <Link className="block py-3 px-8 border-b border-gray-600 hover:bg-gray-600" to="/create">Create Post</Link>
                    {jwt ? (
                        <Link className="block py-3 px-8 border-b border-gray-600 hover:bg-gray-600" to="/profile">Profile</Link>
                    ): (
                        <Link className="block py-3 px-8 border-b border-gray-600 hover:bg-gray-600" to="/login">Login</Link>
                    )}
                </nav>
            </Drawer>
        </>
    )
}