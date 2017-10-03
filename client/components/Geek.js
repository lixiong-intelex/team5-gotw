import React from 'react'
import ReactDOM from 'react-dom';

export default class Geek extends React.Component{
    render(){
      return (
        <div className="geek-container">
            <img className="geek-thumb" src={this.props.pictureUrl} />
            <div className="geek-blurb">
              <div className="geek-title">{this.props.name}</div>
              <div className="geek-teaser">{this.props.teaser}</div>
            </div>
        </div>
      );
    }
}