import React, {useState} from 'react';
import { BACKEND_URL } from '../../api/backendURL';
import { useRecoilState } from 'recoil';
import { IsDarkModeState } from '../../state/recoil';

interface IProps {
    postId: number
}

export const CommentForm = ({ postId }:IProps) => {
    const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(IsDarkModeState);
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
                {isDarkMode ? (
                    <textarea className="w-full h-18 p-2 text-black" onChange={onChange} value={content} style={{backgroundColor: "#121212"}}/>
                ): (
                    <textarea className="w-full h-18 p-2 text-black" onChange={onChange} value={content}/>
                )}
            </div>
            <div className="flex border border-t-0 rounded-bl-md rounded-br-md p-3">
                <div className="my-auto">
                    <h1>{content.length}/300</h1>
                </div>
                <div className="flex-grow"></div>
                <div className="text-fakeWhite">
                    <button className="rounded-md bg-primary p-2 border-secondary text-white" onClick={onClick}>등록</button>
                </div>
            </div>
        </div>
    )
}