import React, {useState, useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { BACKEND_URL } from '../../api/backendURL';
import { COLORS } from '../../colors/color';
import { getCookie } from '../../cookie/cookie';
import profile from '../../img/profile4.jpg';
import { IsDarkModeState } from '../../state/recoil';
import { DateTimeFormat } from '../dateTime/datetimeFormat';


export const CommentComponent = ({comment, comments, setComments}:any) => {
    const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(IsDarkModeState);
    const [edit, setEdit ] = useState(false);
    const [editContent, setEditContent ] = useState("");

    const onClickRemove = () => {
        let ok = window.confirm("정말 댓글을 삭제하시겠습니까?")
        if (ok) {
            fetch(BACKEND_URL + '/comments/' + comment.id, {
                method: 'DELETE',
                headers: {
                    'X-AUTH-TOKEN' : getCookie('jwt')
                }
            })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    console.log(comments)
                    setComments(comments.filter((c:any) => c.id !== comment.id))
                }
            })
        }
    }

    const onClickEdit = () => {
        setEditContent(comment.content);
        setEdit(!edit);
    }

    const editComplete = () => {
        fetch(BACKEND_URL + '/comments/' + comment.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': getCookie('jwt')
            },
            body: JSON.stringify({content: editContent})
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                comment.content = editContent;
                comment.updatedDate = new Date();
                setEdit(false);
            }
            
        })
    }

    return (
        <div >
            <div className="border-b mt-5 mb-8">
                <div className="mb-3 flex">
                    <div className="mr-3">
                        <img src={profile} width={48} alt="proile"/>
                    </div>
                    <div>
                        <h1>{comment.user.name}</h1>
                        <div className="flex flex-row">
                            {(comment.createdDate !== comment.updatedDate) ? (
                                <h1><DateTimeFormat datetime={comment.updatedDate} text={"(편집됨)"}/></h1>
                            ):(
                                <h1><DateTimeFormat datetime={comment.createdDate}/></h1>
                            )}
                            {comment.user.loginId === getCookie('loginId') && 
                                <div>
                                    <button className="ml-2" onClick={onClickEdit}>{edit ? "취소" : "수정"}</button>
                                    <button className="mx-2" onClick={onClickRemove}>삭제</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div>
                    {edit ? (
                        <div className="flex flex-row">
                            <input className="w-full py-1" value={editContent} onChange={(e) => setEditContent(e.target.value)} style={isDarkMode ? {backgroundColor: COLORS.darkBackground, color: 'white'} : {}}/>
                            <button className="whitespace-nowrap mx-2" onClick={editComplete}>완료</button>
                        </div>
                    ): (
                        <h1 style={{wordBreak: 'break-word'}} className="mb-2">{comment.content}</h1>
                    )}
                     
                </div>
            </div>
        </div>
    )
}
