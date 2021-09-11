import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import Header from '../component/layout/header';
import { RouteComponentProps } from "react-router-dom";
import { DateFormat } from '../component/dateTime/dateFormat';
import { DateTimeFormat } from '../component/dateTime/datetimeFormat';

interface ILocation {
}


export const PostDetail : React.FunctionComponent<RouteComponentProps<ILocation>> =  ({location}) => {
    const pathName = location.pathname;
    const [post, setPost] = useState({"title":"", "content": "", "createdDate": ""});

    useEffect(() => {
        console.log(pathName);
        fetch(BACKEND_URL + pathName + '/', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPost(data);
        })
    }, []) 
    

    return (
        <div>
            <Header/>
            <div className="max-w-4xl mx-auto my-8">
                <div className="border-b">
                    <h1 className="font-bold text-3xl py-5">{post.title}</h1>
                </div>
                <div className="py-12">
                    <DateTimeFormat datetime={post.createdDate}/>
                    <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }} style={{wordBreak: 'break-word'}}/>
                </div>
            </div>
        </div>
    )
} 