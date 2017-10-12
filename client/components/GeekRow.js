import React from 'react'
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap'

export default class GeekRow extends React.Component{
    render(){
      return (
        <Row>
          <Col md={4}>
            <img className="geek-thumb" src={this.props.thumbnailUrl} />
          </Col>
          <Col md={8}>
            <div className="geek-title">{this.props.name}</div> 
            <div className="geek-teaser">{this.props.teaser}</div>
          </Col>
        </Row>
      );
    }
}