import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';


export const TagList = (props:any) => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        fetch(BACKEND_URL + '/tags', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTags(data);
        })
    }, [])

    const onClick = (e: React.FormEvent<HTMLButtonElement>) => {
        props.setTag(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return (
        <div className="py-6 px-4">
            <p className="text-blue-900 font-extrabold">Tags</p>
            <div className="py-4">
                {tags.map((item) => (
                    <div className="mb-2">
                        <button className="bg-gray-200 px-2 hover:bg-gray-300" onClick={onClick} value={item["id"]}>#{item["name"]}</button>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
