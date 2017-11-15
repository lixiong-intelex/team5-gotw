import React from 'react';
import { Routes } from "./routes";
import GeekList from '../GeekList/GeekList';
import Nav from '../Nav/Nav';
 
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        {Routes}        
      </div>
    )
  }
}
