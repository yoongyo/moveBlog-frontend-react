import React, {useEffect, useState} from 'react';
import Header from '../component/layout/header';
import { PostListComponent } from '../component/postListComponent';
import Logo from '../img/logo.png';
import { BACKEND_URL } from '../api/backendURL';
import { Footer } from '../component/layout/footer';
import { TagList } from '../component/tagList';
import Pagination from 'react-js-pagination';
import '../styles/paging.css';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { getCookie } from '../component/cookie/cookie';



interface IPost {
    
}

export const Main = ({location}:any) => {
    const [posts, setPosts] = useState<Array<any>[]>([]);
    const [tag, setTag] = useState();
    const [allPosts, setAllPosts] = useState<[]>([]);
    const [page, setPage] = useState(1)
    const pagination = 6;

    const tagQuery = queryString.parse(location.search);
    

    
    useEffect(() => {
        fetch(BACKEND_URL + '/posts', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            data.reverse();
            if (tagQuery.tag) {
                console.log(tagQuery.tag)
                // 이건 진짜 유용하니까 
                console.log(data.filter((post:any) => post.postTags.map((tag:any) => tag.tagName === tagQuery.tag).includes(true)));
                setAllPosts(data.filter((post:any) => post.postTags.map((tag:any) => tag.tagName === tagQuery.tag).includes(true)));
                setPosts(data.filter((post:any) => post.postTags.map((tag:any) => tag.tagName === tagQuery.tag).includes(true)));
            } else {
                setAllPosts(data);
                setPosts(data.slice(0,pagination))
            }
        })
    }, [])

    const onChange = (page:any) => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setPage(page);
        setPosts(allPosts.slice((page-1) * pagination, (page*pagination)));
    }

    

    return (
        <div className="flex flex-col min-h-screen ">
            <Header/>
            <div className="max-w-4xl mx-auto py-12 flex-1 w-full sm:grid sm:grid-cols-4">
                <div className="col-span-3">
                    {posts.map((post, index) => (
                        <PostListComponent post={post}/>
                    ))}
                </div>
                <div className="col-span-1 relative">
                    <TagList setTag={setTag} tag={tagQuery.tag}/>
                </div>
            </div>
            {allPosts.length > pagination &&
                <div className="mb-16">
                    <Pagination 
                        activePage={page} 
                        itemsCountPerPage={pagination} 
                        totalItemsCount={allPosts.length} 
                        pageRangeDisplayed={5} 
                        prevPageText={"‹"} 
                        nextPageText={"›"} 
                        onChange={onChange} 
                    />
                </div>
            }
            <Footer/>   
        </div>
    )
}