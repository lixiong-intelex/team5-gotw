import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component{
    render() {
        return (
          <div>
            <Link to="/About">About</Link>
          </div>
        );
    }
}