import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Todo from './Todo';
import Likes from './component/Likes'

const Router =()=>(
    <BrowserRouter>
        <div>

            <Switch>
                <Route path='/' component={Todo} exact={true}/>
                <Route path='/likes' component={Likes} />
            </Switch>
        </div>
    </BrowserRouter>
)
export default Router;