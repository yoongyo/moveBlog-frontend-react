import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DateFormat } from './dateTime/dateFormat';



export const PostListComponent = ({post}:any) => {

    return (
        <div className="border-b mb-10 mx-4 sm:px-0">
            <Link to={{pathname:'posts/'+`${post.id}`}}>
                <div className="mb-5 flex felx-row">
                    <DateFormat datetime={post.createdDate}/> 
                    <h1 className="ml-3">{post.author.name}</h1>
                </div>
                <div>
                    <h1 className="font-extrabold text-2xl mb-2">{post.title}</h1>
                    <h1 className="w-full">{post.subTitle}</h1>
                </div>
            </Link>
            <div className="my-6 flex flex-row flex-wrap">
                {post.postTags.map((tag:any) => (
                    <div className="mr-2 mb-2">
                        <button className="bg-gray-200 px-2 hover:bg-gray-300">#{tag.tagName}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}