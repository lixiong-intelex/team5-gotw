import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Routes from '../routes.js';
import GeekList from './GeekList.js'
import GeekDetail from './GeekDetail/GeekDetail.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GeekList />
        <Routes />
      </div>
    )
  }
}
