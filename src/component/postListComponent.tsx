import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DateFormat } from './dateTime/dateFormat';



export const PostListComponent = ({post}:any) => {

    useEffect(() => {
        console.log(post.id);
    })

    return (
        <div className="border-b pb-12 mb-10 mx-4 sm:px-0">
            <Link to={{
                pathname:'posts/'+`${post.id}`,
            }}>
                <div className="mb-5">
                    <DateFormat datetime={post.createdDate}/> 
                    <h1>{post.user}</h1>
                </div>
                <div>
                    <h1 className="font-extrabold text-2xl mb-2">{post.title}</h1>
                    <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }} style={{wordBreak: 'break-word'}}/>
                </div>
            </Link>
        </div>
    )
}