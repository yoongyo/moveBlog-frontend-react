import React, {useEffect, useState} from 'react';
import Header from '../component/layout/header';
import { PostListComponent } from '../component/postListComponent';
import Logo from '../img/logo.png';
import { BACKEND_URL } from '../api/backendURL';
import { Footer } from '../component/layout/footer';
import { TagList } from '../component/tagList';
import Pagination from 'react-js-pagination';
import '../styles/paging.css';


interface IPost {
    
}

export const Main = () => {
    const [posts, setPosts] = useState<Array<any>[]>([]);
    const [tag, setTag] = useState();
    const [allPosts, setAllPosts] = useState<[]>([]);
    const [page, setPage] = useState(1)
    const pagination = 6;
    
    useEffect(() => {
        fetch(BACKEND_URL + '/posts', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.reverse());
            setAllPosts(data);
            setPosts(data.slice(0,pagination))
        })
    }, [])

    const onChange = (page:any) => {
        setPage(page);
        setPosts(allPosts.slice((page-1) * pagination, (page*pagination)));
    }

    

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <p>{tag}</p>
            <div className="max-w-4xl mx-auto py-12 flex-1 w-full grid grid-cols-4">
                <div className="col-span-3">
                    {posts.map((post, index) => (
                        <PostListComponent post={post}/>
                    ))}
                </div>
                <div className="col-span-1">
                    <TagList setTag={setTag}/>
                </div>
            </div>
            <div className="mb-16">
                <Pagination 
                    activePage={page} 
                    itemsCountPerPage={pagination} 
                    totalItemsCount={allPosts.length} 
                    pageRangeDisplayed={6} 
                    prevPageText={"‹"} 
                    nextPageText={"›"} 
                    onChange={onChange} 
                />
            </div>
            <Footer/>   
        </div>
    )
}