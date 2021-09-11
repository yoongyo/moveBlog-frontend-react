import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../api/backendURL';
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";


interface IFormValues  {
    loginId: String;
    password: String;
    cPassword: String;
    name: String;
}

type InputProps = {
    label: Path<IFormValues>;
    labelText: string
    placeholder: string;
    register: UseFormRegister<IFormValues>;
    required: boolean;
}

const Input = ({ label, labelText, placeholder, register, required}: InputProps) => (
    <>
        <label className="text-sm">{labelText}</label>
        <input className="bg-gray-200 rounded-full w-full h-10 px-4 mb-3" {...register(label, { required })} placeholder={placeholder} />
    </>
)

export const SignupForm = (props:any) => {
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit: SubmitHandler<IFormValues> = () => {
        console.log("submit");
    }
    return (
        <div className="mx-auto w-72 rounded-lg shadow-lg h-76 py-12 px-6 z-10 bg-white">
            <form onSubmit={handleSubmit(onSubmit)} onChange={() => console.log(watch())}>
                <Input label="loginId" labelText="아이디" register={register} required placeholder="아이디"/>
                <Input label="password" labelText="비밀번호" register={register} required placeholder="비밀번호"/>
                <Input label="cPassword" labelText="비밀번호 확인" register={register} required placeholder="비밀번호 확인"/>
                <Input label="name" labelText="이름" register={register} required placeholder="이름"/>
                <button className="rounded-full w-full h-11 px mx-auto text-white" style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}}>
                    회원가입
                </button>
            </form>
        </div>
    )
}