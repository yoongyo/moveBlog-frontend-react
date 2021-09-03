import React, {useEffect, useState} from 'react';
import Header from '../component/header';
import { PostListComponent } from '../component/postListComponent';
import Logo from '../img/logo.png';
import { BACKEND_URL } from '../api/backendURL';

export const Main = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch(BACKEND_URL + '/posts/', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setPosts(json.reverse());
        })
    }, [])

    return (
        <div>
            <div className="max-w-4xl mx-auto my-8">
            </div>
            <div className="max-w-4xl mx-auto">
                {posts.map((item, index) => (
                    <PostListComponent/>
                ))}
            </div>
        </div>
    )
}