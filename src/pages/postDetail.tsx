import React from 'react';
import Header from '../component/header';
import { FacebookProvider, Comments } from 'react-facebook';


export const postDetail =  () => {
    return (
        <div>
            <Header/>
            <div className="max-w-4xl mx-auto my-8">
                <div className="border-b">
                    <h1 className="font-bold text-3xl py-5">우아한테크러닝 4기 후기</h1>
                </div>
                <div>
                    <FacebookProvider appId="123456789">
                        <Comments href="http://www.facebook.com" />
                    </FacebookProvider>
                </div>
            </div>
        </div>
    )
}