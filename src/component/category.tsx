import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import plusIcon from '../img/plus_icon.svg';
import { useHistory } from 'react-router-dom';

export const Category = () => {
    const [categories, setCategoies] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetch(BACKEND_URL + 'category/', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setCategoies(json.reverse());
        })
    }, [])

    const onClick = () => {
        window.open('/addCategory', 'new', 'resizable=no width=450 height=380'); 
        return false;
    }

    

    
    return (
        <>
            <select className="border rounded-md w-full">
                {categories.map((item, index) => (
                    <option value="1">ffaf</option>
                ))}
            </select>
            <a href="#" className="px-4 my-auto" onClick={onClick}><img src={plusIcon}/></a>
        </>
    )
}