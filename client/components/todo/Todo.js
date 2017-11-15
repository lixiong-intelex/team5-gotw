import React, { Component } from 'react';

export default class Todo extends Component {
    render () {
        return (
            <div>
                <div className="container">
                    <h1>Agenda</h1>
                    <ul>
                        <li>Add simple 'add geek' functionality to GeekList (temporary) - with actions and reducers</li>
                        <li>Move 'add geek' to its own page</li>
                        <li>Add a route and menu item for add geek</li>                                        
                        <li>Add linting to webpack.config.js (see alliance project)</li>
                    </ul>
                </div>
                <div className="container">
                    <h1>Decisions</h1>
                    <ul>
                        <li>Where should we persist the geek data?</li>
                    </ul>
                </div>
            </div>
        );
    };
}