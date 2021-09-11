import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../api/backendURL';



export const LoginForm = (props:any) => {
    const [loginId, setLoginId] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const onClick = () => {
        fetch(BACKEND_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': String(localStorage.getItem("jwt"))
            },
            body: JSON.stringify({"loginId": loginId, "password": password})
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


    return (
        <div className="mx-auto w-72 rounded-lg shadow-lg h-76 py-12 px-6 z-10 bg-white">
            <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" placeholder="아이디" onChange={onChangeID}/>
            <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" placeholder="비밀번호" type="password" onChange={onChangePW}/>
            <button className="rounded-full w-full h-11 px mx-auto text-white mb-3" style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}} onClick={onClick}>로그인</button>
            <Link to="/signup" >
                <button className="rounded-full w-full h-11 px mx-auto text-white" style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}} >
                    회원가입
                </button>
            </Link>
        </div>
    )
}