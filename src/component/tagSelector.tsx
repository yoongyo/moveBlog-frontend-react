import React, { useState, useEffect } from 'react'; 
import Select from 'react-select'; 
import { BACKEND_URL } from '../api/backendURL';
import plusIcon from '../img/plus_icon.svg';
import { Fade } from '@material-ui/core';
import { getCookie } from './cookie/cookie';

export const TagSelector = (props: any) => { 
    const [fade, setFade] = useState(false);
    const [options, setOptions] = useState<any>([]);
    const [tagInput, setTagInput] = useState("");
    

    useEffect(() => {
        fetch(BACKEND_URL + '/tags', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            const optionList: any[] = [];
            data.map((i:any) => 
                optionList.push(Object({value: i.id, label: i.name}))
            )
            setOptions(optionList)
        })
    }, [])

    const onClick = () => {
        setFade(!fade)
    }

    const createTag = () => {
        fetch(BACKEND_URL + '/tags', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': getCookie('jwt')
            },
            body: JSON.stringify({name: tagInput})
        })
        .then(res => res.json())
        .then(data =>  {
            const newData = Object({value: data.id, label: data.name});
            setOptions([...options, newData]);
            props.setTags([...props.tags, newData])
        });
        setFade(!fade);
        setTagInput("");
    }

    const onChange = (selectedOptions:any) => {
        props.setTags(selectedOptions);
        console.log(selectedOptions)
    }

    return (
        <>
        <div className="flex flex-row">
            <Select
                value={props.tags}
                isMulti
                name="tags"
                options={options}
                className="w-full"
                classNamePrefix="select"
                onChange={onChange}
            />
            <a className="px-4 my-auto" onClick={onClick}><img src={plusIcon}/></a>
        </div>
        {props.errorTags && <p className="text-red-600 text-sm">{props.errorTags}</p>}

        <Fade in={fade} disableStrictModeCompat={true}>
            <div>
                <input className="border rounded-md mt-3 py-1 px-2" onChange={(e) => setTagInput(e.target.value)} value={tagInput}/>
                <button className="bg-primary border-secondary text-white py-1 px-4 ml-3 font-bold text-md" type="button" onClick={createTag} >Add</button>
            </div>
        </Fade>
        </>
    ); 
}

