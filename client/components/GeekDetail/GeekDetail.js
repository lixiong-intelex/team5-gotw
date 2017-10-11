import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'
import { MockData } from '../MockData.js';

export default class GeekDetail extends React.Component{
    render(){
      return (
        <div>
            <div className="col-md-6 col-md-offset-3">
                <h1>{this.props.name}</h1>
                <p>{this.props.match.params.id}</p>
            </div>
            <Grid>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <img src="http://placehold.it/300" />
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Grid>
        </div>
      );
    }
}