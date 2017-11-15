import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Agenda</h1>
                    <ul>
                        <li>Add simple 'add geek' functionality to GeekList (temporary) - with actions and reducers</li>
                        <li>Move 'add geek' to its own page</li>
                        <li>Add a route and menu item for add geek</li>
                        <li>Add linting to webpack.config.js (see alliance project)</li>
                        <li>Add Sagas to add geek and geek list</li>
                    </ul>
                </div>
                <div className="container">
                    <h1>Decisions</h1>
                    <ul>
                        <li>Where should we persist the geek data?</li>
                        <li>Options:
                            <ul>
                                <li>use a json file</li>
                                <li>add a backend with C# storage to file and Web API endpoints</li>
                                <li>add a backend with DB and Web API endpoint</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}