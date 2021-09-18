import React, {useState, useEffect} from 'react';
import profile from '../../img/profile4.jpg';


export const CommentComponent = ({comment}:any) => {
    return (
        <>
            <div className="border-b mb-8">
                <div className="mb-3 flex">
                    <div className="mr-3">
                        <img src={profile} width={48} alt="proile"/>
                    </div>
                    <div>
                        <h1>익명</h1>
                        <h1>{comment.created_at}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
