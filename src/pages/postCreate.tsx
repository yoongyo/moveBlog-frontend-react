import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import  '../styles/editorStyle.css'
import { BACKEND_URL } from '../api/backendURL';
import { useHistory } from 'react-router-dom';
import { Category } from '../component/category/category';
import Header from '../component/layout/header';
import { WysiwygEditor } from '../component/wysiwygEditor';
import { TagSelector } from '../component/tagSelector';


export const PostCreate = () => {
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>("");
    const [tags, setTags] = useState([]);
    let history = useHistory();


    // useEffect(() => {
    //     if (!localStorage.getItem('token')) {
    //         history.push('login')
    //     }
    // }, [])
    
    const onClick = () => {
        console.log(tags);
        const tagIdList:any = []
        tags.map((tag:any) => tagIdList.push(tag.value))
        console.log(tagIdList);
        fetch(BACKEND_URL + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': String(localStorage.getItem("token"))
            },
            body: JSON.stringify({title: title, content: content, tags: tagIdList})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            history.push('posts/'+ data.data)
        })
    }

    const getContent = (content:string) => {
        setContent(content);
    }

    const getCategory = (id:string) => {
        setCategory(id);
    }

    const getTags = (tags:[]) => {
        setTags(tags);
    }


    return (
        <>
        <Header/>
        <div className="max-w-4xl mx-auto pt-12 px-6">
            <form>
                <div className="grid grid-cols-3 gap-4 pt-12">
                    <div className="col-span-2">
                        <input 
                            className="w-full h-9 outline-none border-b focus:border-secondary hover:border-secondary" 
                            placeholder="제목" 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    {/* <div className="col-span-1 flex flex-row">
                        <Category getCategory={getCategory}/>
                    </div> */}
                </div>
                <div className="pt-12"> 
                    <WysiwygEditor getContent={getContent}/>
                </div>

                <div className="mt-5">
                    <TagSelector setTags={setTags} tags={tags}/>
                </div>

                <div className="buttons flex my-1 py-3">
                    <button className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"><Link to="/">Cancel</Link></button>
                    <button className="btn border border-secondary p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-primary" type="button" onClick={onClick}>Post</button>
                </div>
            </form>
        </div>
        </>
    )
}