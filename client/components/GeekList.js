import React from 'react';
import ReactDOM from 'react-dom';
import Geek from './geek.js'

var data = [
    {pictureUrl: "http://placehold.it/75", name: "Einstein", teaser: "invented Atom Bomb"},
    {pictureUrl: "http://placehold.it/75", name: "Newton", teaser: "Discovered Gravity"}
  ];

export default class GeekList extends React.Component{
    render(){
      return (
        <div>
          {
            data.map((g, i) => <Geek key={i} {...g} />)
            //{/* data.map((g, i) => <Geek key={i} pictureUrl={g.pictureUrl} name={g.name} />) */}
          }
        </div>
      );
    }
}


