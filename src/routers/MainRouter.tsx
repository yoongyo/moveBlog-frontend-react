import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddCategory } from '../component/addCategory';
import Header from '../component/header';
import { Login } from '../pages/login';
import { Main } from '../pages/main';
import { PostCreate } from '../pages/postCreate';
import { PostDetail } from '../pages/postDetail';


export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PostCreate}/>
                <Route path="/login" component={Login}/>
                <Route path="/" exact component={Main}/>
                <Route path="/addCategory" component={AddCategory}/>
                <Route path="/posts/:post_id" component={PostDetail}/>
            </Switch>
        </Router>
    )
}

