import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from "../App/routes";

export default class Nav extends Component  {
    render () {
        return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <span className="navbar-brand nav-icon"></span>
                    <Link className="navbar-brand" to="/">Geek of the Week</Link>                    
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                </ul>
            </div>
        </nav>
        ); 
    };
}
