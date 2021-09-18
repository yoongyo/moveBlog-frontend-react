import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../../api/backendURL';
import { CommentComponent } from './commentComponent';
import { CommentForm } from './commentForm';



export const Comments = ({postId}: any) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(BACKEND_URL + '/comments', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
            // setComments(json.data);
        })
    }, [])

    return (
        <div className="max-w-4xl mx-auto w-full px-3 mb-4">
            <p>댓글 {comments.length}</p>
            {comments.map((comment) => (
                <CommentComponent comment={comment}/>
            ))}
            <CommentForm postId={postId}/>
        </div>
    )
}