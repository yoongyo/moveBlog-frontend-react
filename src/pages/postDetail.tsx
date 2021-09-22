import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import Header from '../component/layout/header';
import { Link, RouteComponentProps } from "react-router-dom";
import { DateTimeFormat } from '../component/dateTime/datetimeFormat';
import { Footer } from '../component/layout/footer';
import { TagComponent } from '../component/tag/tagComponent';
import { Comments } from '../component/comment/comments';
import { getCookie } from '../cookie/cookie';
import { useHistory } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw, convertFromHTML, convertFromRaw } from 'draft-js';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { Spinner } from '../component/spinner/spinner';


interface ILocation {
}


interface IPost {
    id: number,
    title: string,
    content: string,
    createdDate: string,
    author: {
        name: "",
        loginId: ""
    },
    postTags: []
}

export const PostDetail : React.FunctionComponent<RouteComponentProps<ILocation>> =  ({location}) => {
    const pathName = location.pathname;
    const [post, setPost] = useState<IPost>({id: 0, title: "", content: "", createdDate: "", author: {name:"", loginId: ""}, postTags: []});
    const [wysiwygContent, setWysiwygContent ] = useState("");
    const [loading, setLoading] = useState(true);
    let history = useHistory();

    useEffect(() => {
        fetch(BACKEND_URL + '/posts' + pathName, {
            method: 'GET',            
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setPost(json.data);
            setLoading(false);
        })
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []) 

    const onClickDelete = () => {
        let ok = window.confirm("정말 이 게시물을 삭제하시겠습니까?")
        if (ok) {
            fetch(BACKEND_URL + '/posts' + pathName, {
                method: 'DELETE',
                headers: {
                    'X-AUTH-TOKEN' : getCookie('jwt')
                }
            })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    history.push('/');
                }
            })
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="max-w-4xl mx-auto py-12 flex-1 w-full px-3">
                {loading ? (
                    <div className="flex justify-center items-center my-auto h-96">
                        <Spinner/>
                    </div>
                ):(
                    <div>
                        <div className="mb-8">
                            <div className="border-b">
                                <h1 className="font-bold text-3xl py-5">{post.title}</h1>
                            </div>
                            <div className="py-12">
                                <div className="flex flex-row mb-4">
                                    <DateTimeFormat datetime={post.createdDate}/>
                                    <p className="ml-2">{post.author.name}</p>
                                </div>
                                <div className="overflow-auto">
                                    <MarkdownPreview source={post.content!}/>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap">
                                {post.postTags.map((tag, index) => (
                                    <TagComponent tag={tag} key={index}/>
                                ))}
                            </div>
                        </div>
                        {post.author.loginId === getCookie("loginId") && (
                            <div className="flex flex-row-reverse">
                                <button className="py-2 px-3 rounded-md ml-2 bg-primary text-fakeWhite " onClick={onClickDelete}>
                                    삭제
                                </button>
                                <Link to={'/edit/'+post.id} className="py-2 px-3 rounded-md bg-primary text-fakeWhite">수정</Link>
                            </div>
                        )}
                        <Comments/>
                        <div className="px-3">
                            <Link to="/">
                                <button className="w-full py-3 bg-primary text-fakeWhite rounded-md">
                                    목록으로 돌아가기
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
} 