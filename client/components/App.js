import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Routes from '../routes.js';
import Navigation from './Navigation.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Routes />
      </div>
    )
  }
}
