import React, { Component } from 'react';

export default class Todo extends Component {
    render () {
        return (
            <div className="container">
                <h1>Agenda</h1>
                <ul>
                    <li>Initial state</li>
                    <li>Work toward finishing first reducer (for Geek List)</li>
                    <li>Add linting to webpack.config.js (see alliance project)</li>
                </ul>
            </div>
        );
    };
}