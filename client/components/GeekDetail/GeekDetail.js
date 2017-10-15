import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap'
import { MockData } from '../MockData';
import Teaser from './Teaser'

export default class GeekDetail extends React.Component{
    render(){
      var geek = MockData.getGeekById(this.props.match.params.id);
      return (
        <div>
            <div className="col-md-6 col-md-offset-3">
                <h1>{geek.name}</h1>
                <p>{geek.id}</p>
            </div>
            <Grid>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        {<img src={geek.pictureUrl} />}
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Teaser teaserText={geek.teaser} />
                    </Col>
                </Row>
                <Row>
                <ListGroup>
                    {geek.facts.map((f, i) => <ListGroupItem key={i}>{f}</ListGroupItem>)}
                </ListGroup>
                </Row>
            </Grid>
        </div>
      );
    }
}