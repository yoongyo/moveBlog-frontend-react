import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import plusIcon from '../img/plus_icon.svg';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CategoryListState, CategoryState } from '../state/recoil';

export const Category = () => {
    const [categoryList, setCategoryList] = useRecoilState<any[]>(CategoryListState);
    const [categoryState, setCategoryState] = useRecoilState(CategoryState);
    const [selectOption, setSelectOption] = useState(null);
    let history = useHistory();

    useEffect(() => {
        fetch(BACKEND_URL + 'category/', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            setCategoryList(data);
        })
        // console.log(categoryList[-1])
        // setSelectOption(categoryList[-1]["id"]);
    }, [])


    const onClick = () => {
        window.open('/addCategory', 'new', 'resizable=no width=450 height=380'); 
        return false;
    }

    const onChange = (e : React.ChangeEvent<HTMLSelectElement>) => {   
        // categoryState는 readOnly 객체이기 때문에 Object.freeze 함수로 쓰기 전용으로 바꿔준다.
        let category = Object.freeze(categoryState);
        category = {"categoryId": e.target.value}
        setCategoryState(category);
        console.log(categoryState)     
    }

    
    return (
        <>
            <select className="border rounded-md w-full" onChange={onChange}>
                <option value="">카테고리 선택</option>
                {categoryList.map((item, index) => (
                    <option value={item["id"]} selected={selectOption == item["id"]}>{item["name"]}</option>
                ))}
            </select>
            <a className="px-4 my-auto" onClick={onClick}><img src={plusIcon}/></a>
        </>
    )
}