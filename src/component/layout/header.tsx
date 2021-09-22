import React from 'react';
import { DrawerNavigation } from '../nav/drawerNavigation'
import { Link, RouteComponentProps } from 'react-router-dom'
import BlackLogo from '../../img/blackLogo.png';
import WhiteLogo from '../../img/logo.png';
import Cookies from 'universal-cookie';
import { getCookie } from '../../cookie/cookie';
import { DarkModeBtn } from '../button/darkModeBtn';
import { useRecoilState } from 'recoil';
import { IsDarkModeState } from '../../state/recoil';




const Header = () => {

    const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(IsDarkModeState);
    let Logo = "";
    if (isDarkMode) {
        Logo = WhiteLogo;
    } else {
        Logo = BlackLogo;
    }
    return (
        <div className="border-b p-5 border-gray-200">
            <div className="absolute">
                <DrawerNavigation/>
            </div>
            <div className="sm:max-w-4xl sm:mx-auto sm:text-left">
                <div className="flex flex-row justify-center lg:justify-between">
                    <div className="flex flex-row mr-6">
                        <a href="/">
                            <img src={Logo} width={30}/>
                        </a>
                        <p className="text-xl sm:text-2xl font-bold box-content mx-2">MOVE</p> 
                        <p className="text-lg sm:text-lg font-bold self-center" style={{color: '#c0c0c0', 'fontWeight': 500}}>기술블로그</p>
                    </div>
                    <DarkModeBtn/>
                </div>  
            </div>
        </div>
    )
}

export default Header;
