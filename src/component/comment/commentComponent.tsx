import React, {useState, useEffect} from 'react';
import { getCookie } from '../../cookie/cookie';
import profile from '../../img/profile4.jpg';
import { DateTimeFormat } from '../dateTime/datetimeFormat';


export const CommentComponent = ({comment}:any) => {
    console.log(comment)
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
                            <h1><DateTimeFormat datetime={comment.createdDate}/></h1>
                            {comment.user.loginId === getCookie('loginId') && 
                                <div>
                                    <button className="ml-2">수정</button>
                                    <button className="ml-2">삭제</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <h1 style={{wordBreak: 'break-word'}} className="mb-2">{comment.content}</h1>
                </div>
            </div>
        </div>
    )
}
