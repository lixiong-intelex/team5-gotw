import React from 'react';
import ReactDOM from 'react-dom';
import GeekRow from './GeekRow.js';
import GeekDetail from './GeekDetail/GeekDetail.js';
import Link from 'react-router-dom';

import { Grid, Jumbotron } from 'react-bootstrap'

var data = [
    {pictureUrl: "http://placehold.it/75", name: "Einstein", teaser: "invented Atom Bomb"},
    {pictureUrl: "http://placehold.it/75", name: "Newton", teaser: "Discovered Gravity"}
  ];

export default class GeekList extends React.Component{
    render(){
      return (
        <div>
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>Please click on one of the following geeks to view more information</p>
          </Jumbotron>
          <Grid>          
            {
              data.map((g, i) => 
                <Link to={"/geekdetail/${i}"}>
                  <GeekRow key={i} {...g} />
                </Link>
              )
            }
          </Grid>
        </div>
      );
    }
}


