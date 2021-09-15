import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import Header from '../component/layout/header';
import { RouteComponentProps } from "react-router-dom";
import { DateFormat } from '../component/dateTime/dateFormat';
import { DateTimeFormat } from '../component/dateTime/datetimeFormat';
import { Footer } from '../component/layout/footer';

interface ILocation {
}


interface IPost {
    title: string,
    content: string,
    createdDate: string,
    author: {
        name: ""
    },
    postTags: []
}

export const PostDetail : React.FunctionComponent<RouteComponentProps<ILocation>> =  ({location}) => {
    const pathName = location.pathname;
    const [post, setPost] = useState<IPost>({title: "", content: "", createdDate: "", author: {name:""}, postTags: []});

    useEffect(() => {
        console.log(pathName);
        fetch(BACKEND_URL + pathName, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPost(data.data);
        })
    }, []) 
    
    const onClick = () => {

    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="max-w-4xl mx-auto py-12 flex-1 w-full">
                <div className="border-b">
                    <h1 className="font-bold text-3xl py-5">{post.title}</h1>
                </div>
                <div className="py-12">
                    <div className="flex flex-row mb-4">
                        <DateTimeFormat datetime={post.createdDate}/>
                        <p className="ml-3">{post.author.name}</p>
                    </div>
                    <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }} style={{wordBreak: 'break-word'}}/>
                </div>
                <div className="flex flex-row flex-wrap">
                    {post.postTags.map(tag => (
                        <div className="mb-2 mr-3">
                            <button className="bg-gray-200 px-2 hover:bg-gray-300" onClick={onClick} value={tag["id"]}>
                                <p>#{tag["tagName"]}</p>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
} 