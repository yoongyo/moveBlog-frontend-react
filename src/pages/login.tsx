import React from 'react';
import  '../styles/loginStyle.css3'
import Logo from '../img/moveLogo.png';
import { LoginForm } from '../component/loginForm';


export const Login = () => {
    return (
        <>
            <div style={{background: "linear-gradient(135deg, #688fed 0%, #475ca9 45%, #688fed 100%)"}} className="pt-10 h-60 z-0 relative">
                <div className="max-w-xl mx-auto">
                    <img src={Logo} width="86px" className="mx-auto"/>
                </div>
                {/* <div className="absolute -top-20">
                    <LoginForm/>
                </div> */}
            </div>
            <div className=" -top-12 z-20 relative">
                <LoginForm/>
            </div>
        </>
    )
}