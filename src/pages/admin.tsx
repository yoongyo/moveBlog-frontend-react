import React, {useState} from 'react';
import { AdminContent } from '../component/adminContent';
import { AdminNav } from '../component/adminNav';


export const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="flex flex-row">
            <AdminNav collapsed={collapsed}/>
            <AdminContent handleCollapsedChange={handleCollapsedChange}/>
        </div>
    )
}