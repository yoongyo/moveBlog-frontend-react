import React, {useEffect} from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/fontawesome.css';
import { useHistory } from 'react-router-dom';

export const AdminContent = ({handleCollapsedChange}:any) => {

    let history = useHistory();
    const pathname = history.location.pathname
    
    useEffect(() => {   
        console.log("test");
    }, [pathname])

    return (
        <div className="w-full bg-primary">
            <div className="bg-secondary w-full h-14 mb-3 py-3 px-3">
                <button onClick={handleCollapsedChange}>
                    <FontAwesomeIcon 
                        icon={faBars} 
                        size="2x" 
                        className="hover-orange"
                        color="#5A738E"/>
                </button>
            </div>
            <div className="w-full h-full bg-secondary">

            </div>
        </div>
    )
}