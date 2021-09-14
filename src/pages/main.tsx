import React, {useEffect, useState} from 'react';
import Header from '../component/layout/header';
import { PostListComponent } from '../component/postListComponent';
import Logo from '../img/logo.png';
import { BACKEND_URL } from '../api/backendURL';
import { Footer } from '../component/layout/footer';

interface IPost {
    
}

export const Main = () => {
    const [posts, setPosts] = useState<[]>([]);
    
    useEffect(() => {
        fetch(BACKEND_URL + '/posts', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.reverse());
            setPosts(data);
        })
    }, [])

    return (
        <>
            <Header/>
            <div className="max-w-4xl mx-auto py-12">
                {posts.map((post, index) => (
                    <PostListComponent post={post}/>
                ))}
            </div>
            <Footer/>
        </>
    )
}