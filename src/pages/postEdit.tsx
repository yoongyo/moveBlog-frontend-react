import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import  '../styles/editorStyle.css'
import { BACKEND_URL } from '../api/backendURL';
import { useHistory } from 'react-router-dom';
import Header from '../component/layout/header';
import { WysiwygEditor } from '../component/wysiwygEditor/wysiwygEditor';
import { TagSelector } from '../component/tag/tagSelector';
import { Footer } from '../component/layout/footer';
import { getCookie } from '../cookie/cookie';


export const PostEdit = () => {
    const param:any = useParams();
    const postId = param.post_id

    const [title, setTitle] = useState<string>("");
    const [subTitle, setSubTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [tags, setTags] = useState<[]>([]);

    const [errorTitle, setErrorTitle] = useState<string>('');
    const [errorSubTitle, setErrorSubTitle] = useState<string>('');
    const [errorContent, setErrorContent] = useState<string>('');
    const [errorTags, setErrorTags] = useState<string>('');

    let history = useHistory();
    
    useEffect(() => {
        if (!getCookie('jwt')) {
            history.push('login')
        }
        fetch(BACKEND_URL + '/posts/' + postId, {
            method: 'GET',            
        })
        .then(res => res.json())
        .then(json => {
            const post = json.data;
            setTitle(post.title);
            setSubTitle(post.subTitle);
            setContent(post.content);
        })
    }, [])
    
    const onClick = () => {
        nullCheck()
        const tagIdList:any = []
        tags.map((tag:any) => tagIdList.push(tag.value))
        fetch(BACKEND_URL + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': getCookie('jwt')
            },
            body: JSON.stringify({title: title, subTitle: subTitle, content: content, tags: tagIdList})
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                history.push('/'+ json.data)
            } else {
                console.log("잘못된 접근입니다.")
            }
        })
    }

    const onKeyDown = (keyEvent:any) => {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }

    const nullCheck = () => {
        if (title === "") {
            setErrorTitle("제목을 입력해주세요")
        }
        if (subTitle === "") {
            setErrorSubTitle("부 제목을 입력해주세요")
        }
        if (content === "") {
            setErrorContent("본문을 입력해주세요")
        }
        if (tags.length === 0) {
            setErrorTags("하나 이상의 태그를 입력해주세요")
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="max-w-4xl mx-auto py-12 flex-1 w-full px-6">
                <form onKeyDown={onKeyDown}>
                    <div className="pt-12">
                        <input 
                            className="w-full h-9 outline-none border-b focus:border-secondary hover:border-secondary" 
                            placeholder="제목" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {errorTitle && <p className="text-red-600 text-sm">{errorTitle}</p>}
                    </div>
                    <div className="pt-12">
                        <input 
                            className="w-full h-9 outline-none border-b focus:border-secondary hover:border-secondary" 
                            placeholder="부 제목"
                            value={subTitle} 
                            onChange={(e) => setSubTitle(e.target.value)}
                        />
                        {errorSubTitle && <p className="text-red-600 text-sm">{errorSubTitle}</p>}
                    </div>
                    <div className="pt-16"> 
                        <WysiwygEditor setContent={setContent} content={content}/>
                        {errorContent && <p className="text-red-600 text-sm">{errorContent}</p>}
                    </div>

                    <div className="mt-5">
                        <TagSelector setTags={setTags} tags={tags} errorTags={errorTags}/>
                    </div>

                    <div className="buttons flex my-1 py-3">
                        <button className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"><Link to="/">Cancel</Link></button>
                        <button className="btn border border-secondary p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-primary" type="button" onClick={onClick}>Edit</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}