import React, {useRef} from 'react';
import { BACKEND_URL } from '../../api/backendURL';
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { useHistory } from 'react-router-dom';


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
    <div className="mt-3">
        <label className="text-sm">{labelText}</label>
        <input className="bg-gray-200 rounded-full w-full h-10 px-4 outline-none" {...register(label, { required })} placeholder={placeholder}/>
    </div>
)

export const SignupForm = (props:any) => {
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    let history = useHistory();

    const onSubmit: SubmitHandler<IFormValues> = () => {
        console.log(watch());
        fetch(BACKEND_URL + '/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(watch())
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                history.push("login")
            } 
            console.log(data)
        })
    }
    const password = useRef({});
    password.current = watch("password", "");


    return (
        <div className="mx-auto w-72 rounded-lg shadow-lg h-76 py-12 px-6 z-10 bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="loginId" labelText="아이디" register={register} required placeholder="아이디"/>

                <div className="mt-3">
                    <label className="text-sm">비밀번호</label>
                    <input
                        className="bg-gray-200 rounded-full w-full h-10 px-4 outline-none"
                        placeholder="비밀번호"
                        {...register("password", { 
                            required:true,
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}
                        type="password"
                    />
                    {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>
                <div className="mt-3">
                    <label className="text-sm">비밀번호 확인</label>
                    <input
                        className="bg-gray-200 rounded-full w-full h-10 px-4 outline-none"
                        placeholder="비밀번호 확인"
                        {...register("cPassword", { 
                            validate: value => value === password.current || "The passwords do not match"
                        })}
                        type="password"
                    />
                    {errors.cPassword && <p className="text-sm text-red-600">{errors.cPassword.message}</p>}
                </div>
                <Input label="name" labelText="이름" register={register} required placeholder="이름"/>
                <button className="rounded-full w-full h-11 mt-6 mx-auto text-fakeWhite" style={{background: "linear-gradient(to left, #688fed 0%, #475ca9 100%)"}}>
                    회원가입
                </button>
            </form>
        </div>
    )
}