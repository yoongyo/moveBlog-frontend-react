import React from 'react';
import Header from '../component/header';
import { PostListComponent } from '../component/postListComponent';
import Logo from '../img/logo.png';


export const Main = () => {
    return (
        <div>
            <Header/>
            <div className="max-w-4xl mx-auto my-8">
            </div>
            <div className="max-w-4xl mx-auto">
                <PostListComponent/>
            </div>
        </div>
    )
}