import React, {useEffect, useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import Header from '../component/layout/header';
import { Link, RouteComponentProps } from "react-router-dom";
import { DateFormat } from '../component/dateTime/dateFormat';
import { DateTimeFormat } from '../component/dateTime/datetimeFormat';
import { Footer } from '../component/layout/footer';
import { TagComponent } from '../component/tag/tagComponent';
import { Comments } from '../component/comment/comments';
import { getCookie } from '../cookie/cookie';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


interface ILocation {
}


interface IPost {
    id: number,
    title: string,
    content: string,
    createdDate: string,
    author: {
        name: ""
    },
    postTags: []
    authority :boolean;
}

export const PostDetail : React.FunctionComponent<RouteComponentProps<ILocation>> =  ({location}) => {
    const pathName = location.pathname;
    const [post, setPost] = useState<IPost>({id: 0, title: "", content: "", createdDate: "", author: {name:""}, postTags: [], authority: false});

    let history = useHistory();

    useEffect(() => {
        if (getCookie('jwt')) {
            fetch(BACKEND_URL + '/posts' + pathName+'/login', {
                method: 'GET',            
                headers: {
                    'X-AUTH-TOKEN': getCookie('jwt')                    
                },
            })
            .then(res => res.json())
            .then(json => {
                setPost(json.data);
            })
        } else {
            fetch(BACKEND_URL + '/posts' + pathName, {
                method: 'GET',            
            })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setPost(json.data);
            })
        }
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
                <div className="border-b">
                    <h1 className="font-bold text-3xl py-5">{post.title}</h1>
                </div>
                <div className="py-12">
                    <div className="flex flex-row mb-4">
                        <DateTimeFormat datetime={post.createdDate}/>
                        <p className="ml-3">{post.author.name}</p>
                    </div>
                    <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }}/>
                </div>
                <div className="flex flex-row flex-wrap">
                    {post.postTags.map((tag, index) => (
                        <TagComponent tag={tag} key={index}/>
                    ))}
                </div>
                {post.authority && (
                    <div className="flex flex-row-reverse mt-8">
                        <button className="py-2 px-3 rounded-md ml-2 bg-primary text-fakeWhite " onClick={onClickDelete}>
                            삭제
                        </button>
                        <Link to={'/edit/'+post.id} className="py-2 px-3 rounded-md bg-primary text-fakeWhite">수정</Link>
                    </div>
                )}
            </div>
            <Comments/>
            <Footer/>
        </div>
    )
} 