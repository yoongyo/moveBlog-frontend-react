import React, {useState} from 'react';
import { BACKEND_URL } from '../../api/backendURL';
import { useRecoilState } from 'recoil';

interface IProps {
    postId: number
}

export const CommentForm = ({ postId }:IProps) => {
    const [content, setContent] = useState("");

    const onClick = () => {
        fetch(BACKEND_URL+'/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({postId: postId, content:content})
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            // setComments(json);
            setContent("");
        })
    } 

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        if (text.length < 301) {
            setContent(text);
            setContent(e.target.value);
        } else {
            alert("300자 안에서 작성해주세요.");
        }
    }

    return (
        <div className="my-10">
            <div className="border border-b p-3 rounded-tl-md rounded-tr-md">
                <h1 className="mb-3">익명</h1>
                <textarea className="w-full h-20" onChange={onChange} value={content}/>
            </div>
            <div className="flex border border-t-0 rounded-bl-md rounded-br-md p-3">
                <div className="my-auto">
                    <h1>{content.length}/300</h1>
                </div>
                <div className="flex-grow"></div>
                <div className="">
                    <button className="rounded-md bg-primary p-2 border-secondary text-white" onClick={onClick}>등록</button>
                </div>
            </div>
        </div>
    )
}