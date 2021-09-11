import React, {useEffect, useState, useRef} from 'react';
import { BACKEND_URL } from '../../api/backendURL';
import plusIcon from '../../img/plus_icon.svg';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CategoryListState } from '../../state/recoil';

export const Category = (props:any) => {
    const [categoryList, setCategoryList] = useRecoilState<any[]>(CategoryListState);
    const [selectOption, setSelectOption] = useState<null|Number>(null);
    let history = useHistory();

    const mounted = useRef(false);

    useEffect(() => {
        fetch(BACKEND_URL + 'category/', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            setCategoryList(data);
        })
    }, [])


    const onClick = () => {
        window.open('/addCategory', 'new', 'resizable=no width=450 height=380'); 
        return false;
    }

    const onChange = (e : React.ChangeEvent<HTMLSelectElement>) => {   
        props.getCategory(e.target.value);
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