import React from 'react';
import { Link, useHistory } from 'react-router-dom';



export const TagComponent = ({tag}:any) => {
    let history = useHistory();


    return (
        <div className="mb-2 mr-3">
            <button className="bg-primary px-3 hover:opacity-75 rounded-xl text-fakeWhite">
                <a href={"/?tag="+tag.tagName}>#{tag.tagName}</a>
            </button>
        </div>
    )
}