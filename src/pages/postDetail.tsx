import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import Header from '../component/layout/header';
import { RouteComponentProps } from "react-router-dom";
import { DateFormat } from '../component/dateTime/dateFormat';
import { DateTimeFormat } from '../component/dateTime/datetimeFormat';
import { Footer } from '../component/layout/footer';
import { TagComponent } from '../component/tagComponent';
import { CommentForm } from '../component/comment/commentForm';
import { Comments } from '../component/comment/comments';
import { getCookie } from '../component/cookie/cookie';

interface ILocation {
}


interface IPost {
    id: number,
    title: string,
    content: string,
    createdDate: string,
    author: {
        name: ""
    },
    postTags: []
    authority :boolean;
}

export const PostDetail : React.FunctionComponent<RouteComponentProps<ILocation>> =  ({location}) => {
    const pathName = location.pathname;
    const [post, setPost] = useState<IPost>({id: 0, title: "", content: "", createdDate: "", author: {name:""}, postTags: [], authority: false});

    useEffect(() => {
        console.log(pathName);
        fetch(BACKEND_URL + pathName, {
            method: 'GET',
            headers: {
                'X-AUTH-TOKEN': getCookie('jwt')
            },
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setPost(json.data);
        })
    }, []) 


    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="max-w-4xl mx-auto py-12 flex-1 w-full px-3">
                <div className="border-b">
                    <h1 className="font-bold text-3xl py-5">{post.title}</h1>
                </div>
                <div className="py-12">
                    <div className="flex flex-row mb-4">
                        <DateTimeFormat datetime={post.createdDate}/>
                        <p className="ml-3">{post.author.name}</p>
                    </div>
                    <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }}/>
                </div>
                <div className="flex flex-row flex-wrap">
                    {post.postTags.map(tag => (
                        <TagComponent tag={tag}/>
                    ))}
                </div>
            </div>
            
            {post.authority && (
                <div>
                </div>
            )}
            
            <Comments postId={post.id}/>
            <Footer/>
        </div>
    )
} 