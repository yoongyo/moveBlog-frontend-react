import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../../api/backendURL';


export const TagList = (props:any) => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        fetch(BACKEND_URL + '/tags', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTags(data);
        })
    }, [])

    const onClick = (e: React.FormEvent<HTMLButtonElement>) => {
        props.setTag(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return (
        <div className="py-6 px-4 md:sticky md:top-0">
            <p className="text-primary font-extrabold">Tags</p>
            <div className="py-4 text-fakeWhite">
                {tags.map((tag:any, index) => (
                    <div className="mb-2" key={index}>
                        {tag.name === props.tag ? (
                            <button className="bg-primary px-3 hover:opacity-75 rounded-xl" onClick={onClick} value={tag["id"]}>
                                <a href={"/?tag="+tag.name}>#{tag.name}</a>
                            </button>
                        ):(
                           <button className="bg-primary px-3 hover:opacity-75 rounded-xl" onClick={onClick} value={tag["id"]}>
                                <a href={"/?tag="+tag.name}>#{tag.name}</a>                               
                            </button>
                            )
                        }
                    </div>
                ))}
            </div>
            
        </div>
    )
}
