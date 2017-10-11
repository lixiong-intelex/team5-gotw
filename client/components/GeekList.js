import React from 'react';
import ReactDOM from 'react-dom';
import GeekRow from './GeekRow.js';
import GeekDetail from './GeekDetail/GeekDetail.js';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { MockData } from './MockData.js';

import { Grid, Jumbotron } from 'react-bootstrap'

export default class GeekList extends React.Component{
  
    render(){
      return (
        <div>
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>Please click on one of the following geeks to view more information</p>
            <Nav />
          </Jumbotron>
          <Grid>
            {
              MockData.map((g, i) => 
                <Link to={`/geekdetail/${i}`}>
                  <GeekRow key={i} {...g} />
                </Link>              
              )
            }
          </Grid>
        </div>
      );
    }
}


