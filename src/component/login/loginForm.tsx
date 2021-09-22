import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../api/backendURL';
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { setCookie } from '../../cookie/cookie';


interface IFormValues {
    loginId: string;
    password: string;
}

export const LoginForm = (props:any) => {
    let history = useHistory();
    const [loginError, setLoginError] = useState<String>("");
    const { register, handleSubmit, watch, formState: {errors}} = useForm();

    const now = new Date();
    const expireTime = now.setDate(now.getDate() + 7);  // 일주일뒤 만료

    const onSubmit: SubmitHandler<IFormValues> = () => {
        console.log(watch())
        fetch(BACKEND_URL + '/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(watch())
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                history.push("/");
                setCookie('jwt', data.data);
                setCookie('loginId', watch().loginId);
            } else{
                setLoginError(data.msg);
            }
        })
    }


    return (
        <div className="mx-auto w-72 rounded-lg shadow-lg h-76 py-12 px-6 z-10 bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3 outline-none text-fakeBlack" 
                    placeholder="아이디"   
                    {...register("loginId", {
                        required: true,
                    })}
                />
                <input 
                    className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3 outline-none text-fakeBlack"
                    placeholder="비밀번호"   
                    {...register("password", {
                        required: true,
                    })}
                    type="password"
                />
                <button 
                    className="rounded-full w-full h-11 px mx-auto mb-3 text-fakeWhite" 
                    style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}} 
                    type="submit"
                >
                    <p>로그인</p>
                </button>
                <Link to="/signup" >
                    <button 
                        className="rounded-full w-full h-11 px mx-auto text-fakeWhite" 
                        style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}} 
                    >
                        <p>회원가입</p>
                    </button>
                </Link>
                <div className="text-center py-1">
                    <p className="text-red-600">{loginError}</p>
                </div>
            </form>
        </div>
    )
}