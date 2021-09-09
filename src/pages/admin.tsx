import React, {useState} from 'react';
import { AdminContent } from '../component/admin/adminContent';
import { AdminNav } from '../component/admin/adminNav';


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