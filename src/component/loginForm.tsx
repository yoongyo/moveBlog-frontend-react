import React from 'react';



export const LoginForm = () => {
    return (
        <div className="mx-auto w-72 rounded-lg shadow-lg h-60 py-12 px-6 z-10 bg-white">
            <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" placeholder="아이디"/>
            <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" placeholder="비밀번호" type="password"/>
            <button className="rounded-full w-full h-11 px mx-auto text-white" style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}}>로그인</button>
        </div>
    )
}