import React from 'react';
import ReactDOM from 'react-dom';
import Geek from './geek.js'

var data = [
    {pictureUrl: "1", name: "Einstein"},
    {pictureUrl: "2", name: "Newton"}
  ];

export default class GeekList extends React.Component{
    render(){
      return (
        <Geek />
      );
    }
}


