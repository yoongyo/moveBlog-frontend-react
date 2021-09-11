import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../api/backendURL';
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";


interface IFormValues {
    loginId: string;
    password: string;
}

export const LoginForm = (props:any) => {

    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit: SubmitHandler<IFormValues> = () => {
        console.log(watch())
        fetch(BACKEND_URL + 'signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(watch())
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // 로그인 전에 누렀던 페이지로 리다이렉트 
            }
            console.log(data.data);
        })
    }


    return (
        <div className="mx-auto w-72 rounded-lg shadow-lg h-76 py-12 px-6 z-10 bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" 
                    placeholder="아이디"   
                    {...register("loginId", {
                        required: true,
                    })}
                />
                <input 
                    className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" 
                    placeholder="비밀번호"   
                    {...register("password", {
                        required: true,
                    })}
                    type="password"
                />
                <button 
                    className="rounded-full w-full h-11 px mx-auto text-white mb-3" 
                    style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}} 
                    type="submit"
                >
                    <p>로그인</p>
                </button>
                <Link to="/signup" >
                    <button 
                        className="rounded-full w-full h-11 px mx-auto text-white" 
                        style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}} 
                    >
                        <p>회원가입</p>
                    </button>
                </Link>
            </form>
        </div>
    )
}