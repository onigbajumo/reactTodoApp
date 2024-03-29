import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';
import Likes from './component/Likes';
import App from './App';
import Router from './Router';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 