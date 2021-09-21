import React, {useState} from 'react';
import { BACKEND_URL } from '../../api/backendURL';
import { useRecoilState } from 'recoil';
import { IsDarkModeState } from '../../state/recoil';
import { getCookie } from '../../cookie/cookie';
import { useHistory } from 'react-router-dom';
import { COLORS } from '../../colors/color';


interface IProps {
    postId: number
}

export const CommentForm = ({ postId, comments, setComments }:any) => {
    const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(IsDarkModeState);
    const [content, setContent] = useState("");

    let history = useHistory();

    const onClick = () => {
        if (getCookie('jwt')){
            fetch(BACKEND_URL+'/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-AUTH-TOKEN': getCookie('jwt')
                },
                body: JSON.stringify({postId: postId, content:content})
            })
            .then(res => res.json())
            .then(json => {
                console.log("여기입니다.!!")
                console.log(json);
                setComments([...comments, json.data]);
                setContent("");
            })
        } else {
            const ok = window.confirm("로그인을 하셔야 댓글을 작성하실 수 있습니다. 로그인 하시겠습니까?");
            if (ok){
                history.push("login")
            }
        }
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
        <div className="mt-4 mb-12">
            <div className="border border-b p-3 rounded-tl-md rounded-tr-md">
                <h1 className="mb-3">댓글 쓰기</h1>
                {isDarkMode ? (
                    <textarea className="w-full h-18 p-2 text-black border rounded-md" onChange={onChange} value={content} style={{backgroundColor: COLORS.darkBackground, color: 'white'}}/>
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