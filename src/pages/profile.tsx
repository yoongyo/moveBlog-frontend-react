import React from 'react';
import { Footer } from '../component/layout/footer';
import Header from '../component/layout/header';


export const Profile = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="max-w-4xl mx-auto py-12 flex-1 w-full px-3 text-center flex justify-center items-center">
                <h1 className="text-4xl font-bold">My Page 준비중</h1>
            </div>
            <Footer/>
        </div>
    )
}