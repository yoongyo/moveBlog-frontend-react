import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AddCategory } from '../component/addCategory';
import Header from '../component/header';
import { Login } from '../pages/login';
import { Main } from '../pages/main';
import { PostCreate } from '../pages/postCreate';
import { PostDetail } from '../pages/postDetail';
import { Profile } from '../pages/profile';
import { Signup } from '../pages/signup';


export const MainRouter = () => {
    const account = localStorage.getItem('account');
    return (
        <Router>
            <Switch>
                <Route path="/create">
                    {account ? (
                        <PostCreate/>
                    ): (
                        <Redirect to={{pathname: '/login'}}/>
                    )}
                </Route>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/" exact component={Main}/>
                <Route path="/addCategory" component={AddCategory}/>
                <Route path="/posts/:post_id" component={PostDetail}/>

            </Switch>
        </Router>
    )
}

