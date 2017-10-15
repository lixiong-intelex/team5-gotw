import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Routes from '../routes';
import Navigation from './Navigation';

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
