import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AddCategory } from '../component/category/addCategory';
import Header from '../component/layout/header';
import { Admin } from '../pages/admin';
import { Login } from '../pages/login';
import { Main } from '../pages/main';
import { PostCreate } from '../pages/postCreate';
import { PostDetail } from '../pages/postDetail';
import { PostEdit } from '../pages/postEdit';
import { Profile } from '../pages/profile';
import { Signup } from '../pages/signup';


export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/create" exact component={PostCreate}/>
                <Route path="/edit/:post_id" component={PostEdit}/>
                <Route path="/" exact component={Main}/>
                <Route path="/tag/:name" component={Main}/>
                <Route path="/admin/:name" component={Admin}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/addCategory" component={AddCategory}/>
                <Route path="/:post_id" component={PostDetail}/>
            </Switch>
        </Router>
    )
}

