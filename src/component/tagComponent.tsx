import React from 'react';
import { Link, useHistory } from 'react-router-dom';



export const TagComponent = ({tag}:any) => {
    let history = useHistory();


    return (
        <div className="mb-2 mr-3">
            <button className="bg-gray-200 px-2 hover:bg-gray-300">
                <a href={"/?tag="+tag.tagName}>#{tag.tagName}</a>
            </button>
        </div>
    )
}