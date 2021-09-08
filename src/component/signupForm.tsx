import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../api/backendURL';



export const SignupForm = (props:any) => {
    const [loginId, setLoginId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [checkPassword, setCheckPassword] = useState<string>("");
    const [name, setName] = useState<string>("");

    const onClick = () => {
        fetch(BACKEND_URL + '/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "loginId": loginId, 
                "password": password,
                'name': name,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.data);
        })
    }


    const onChangeID = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLoginId(e.target.value);
    }

    const onChangePW = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onChangeCPW = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCheckPassword(e.target.value);
    }

    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const chekingPassword = () => {
        if (password == checkPassword) {
            
        }
    }


    return (
        <div className="mx-auto w-72 rounded-lg shadow-lg h-76 py-12 px-6 z-10 bg-white">
            <h1 className=" text-sm mb-2">아이디</h1>
            <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" placeholder="아이디" onChange={onChangeID}/>
            <h1 className=" text-sm mb-2">비밀번호</h1>
            <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" placeholder="비밀번호" type="password" onChange={onChangePW}/>
            <h1 className=" text-sm mb-2">비밀번호 확인</h1>
            <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" placeholder="비밀번호 확인" type="password" onChange={onChangeCPW}/>
            <h1 className=" text-sm mb-2">이름</h1>
            <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-6" placeholder="이름" onChange={onChangeName}/>
            <button className="rounded-full w-full h-11 px mx-auto text-white" style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}} onClick={onClick}>
                회원가입
            </button>
        </div>
    )
}