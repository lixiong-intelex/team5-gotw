import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'

export default class GeekDetail extends React.Component{
    render(){
      return (
        <div>
            <div className="col-md-6 col-md-offset-3">
                <h1>Geek Name</h1>
                <p>Born - Die</p>
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