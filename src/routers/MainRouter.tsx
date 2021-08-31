import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from '../pages/main';
import { postDetail } from '../pages/postDetail';


export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/:post_id/" exact component={postDetail}/>
            </Switch>
        </Router>
    )
}

