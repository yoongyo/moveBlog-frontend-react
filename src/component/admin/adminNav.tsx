import React, {useState} from 'react';
import {ProSidebar, Menu, SubMenu, MenuItem} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../../styles/sidebar/custom.scss';


export const AdminNav = ({collapsed}:any) => {

    return (
        <div className="min-h-screen">
            <ProSidebar width="230px" collapsed={collapsed}>
                <h1>ADMIN</h1>
                <Menu iconShape="square">
                    <SubMenu title="Componenets">
                        <MenuItem>Component1</MenuItem>
                    </SubMenu>
                </Menu>
                <Menu iconShape="square">
                    <SubMenu title="Componenets">
                        <MenuItem>
                            <Link to="/admin/test1">Component1</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
                <Menu iconShape="square">
                    <SubMenu title="Componenets">
                        <MenuItem>                            
                            <Link to="/admin/test2">Component1</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    )
}