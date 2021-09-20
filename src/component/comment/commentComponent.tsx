import React, {useState, useEffect} from 'react';
import profile from '../../img/profile4.jpg';
import { DateTimeFormat } from '../dateTime/datetimeFormat';


export const CommentComponent = ({comment}:any) => {
    return (
        <div >
            <div className="border-b my-7">
                <div className="mb-3 flex">
                    <div className="mr-3">
                        <img src={profile} width={48} alt="proile"/>
                    </div>
                    <div>
                        <h1>{comment.user.name}</h1>
                        <h1><DateTimeFormat datetime={comment.createdDate}/></h1>
                    </div>
                </div>
                <div>
                    <h1 style={{wordBreak: 'break-word'}} className="mb-2">{comment.content}</h1>
                </div>
            </div>
        </div>
    )
}
