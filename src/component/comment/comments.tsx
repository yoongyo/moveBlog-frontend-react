import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { BACKEND_URL } from '../../api/backendURL';
import { CommentComponent } from './commentComponent';
import { CommentForm } from './commentForm';



export const Comments = () => {
    const param:any = useParams();
    const postId = param.post_id;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(BACKEND_URL + '/comments/'+postId, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setComments(json);
        })
    }, [])

    return (
        <div className="max-w-4xl mx-auto w-full px-3 mb-4">
            <p>댓글 {comments.length}</p>
            {comments.map((comment) => (
                <CommentComponent comment={comment}/>
            ))}
            <CommentForm postId={postId} comments={comments} setComments={setComments}/>
        </div>
    )
}