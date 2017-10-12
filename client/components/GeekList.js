import React from 'react';
import ReactDOM from 'react-dom';
import GeekRow from './GeekRow.js';
import GeekDetail from './GeekDetail/GeekDetail.js';
import { Link } from 'react-router-dom';
import { MockData } from './MockData.js';

import { Grid, Jumbotron } from 'react-bootstrap'

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
              MockData.getGeeks().map((g, i) => 
                <Link key={i} to={`/geekdetail/${i}`}>
                  <GeekRow {...g} />
                  <br />
                </Link>                
              )
            }
          </Grid>
        </div>
      );
    }
}


