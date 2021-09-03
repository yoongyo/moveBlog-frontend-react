import React from 'react';
import { BACKEND_URL } from '../api/backendURL';
import { useHistory } from 'react-router-dom';


export const AddCategory  = () => {
    
    let history = useHistory();


    const onClick = () => {
        fetch(BACKEND_URL + 'category/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({name: name})
        })
        .then(res => {
            console.log(res)
            history.push('/')
        })
    }

    return (
        <div className="px-6">
            <h1 className="my-8 text-xl">카테고리 추가</h1>
            <h1>추가할 카테고리명을 입력하세요.</h1>
            <div className="grid grid-cols-3 border-b py-8 px-2">
                <div className="col-span-1">
                    <h1 >카테고리명:</h1>
                </div>
                <div className="col-span-2">
                    <input className="border rounded-md w-full "/>
                </div>
            </div>
            <div style={{backgroundColor: "#f8f8f8"}} className="mt-8 p-4 flex flex-row-reverse">
                <button className="px-4 py-2 bg-secondary rounded-md text-white" onClick={onClick}>저장</button>
            </div>
        </div>
    )
}