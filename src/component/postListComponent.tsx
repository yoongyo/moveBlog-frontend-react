import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DateFormat } from './dateTime/dateFormat';
import { TagComponent } from './tagComponent';



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
                    <TagComponent tag={tag}/>
                ))}
            </div>
        </div>
    )
}