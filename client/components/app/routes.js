// Start routes file placeholder
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import GeekList from '../GeekList/GeekList';
import AboutPage from '../AboutPage/AboutPage';
import Todo from '../Todo/Todo';

export const Routes = (
    <span>
        <Route exact path="/" component={GeekList} />
        <Route exact path="/geeklist" component={GeekList} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/todo" component={Todo} />
    </span>
);