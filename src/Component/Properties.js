import React, {Component} from 'react';
import {Grid, Col, Row, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import propertiesActions from '../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import '../../stylesheets/Container.scss';
import '../../stylesheets/Label.scss';


class Properties extends Component {
/*  onClickAdd = (elem) => {
    this.props.propertiesActions.addFave(elem);
  };*/
  onProperty = (elem) => {
    let url = `/property/${elem.id}`;
    browserHistory.push(url);
  };
  render() {
    let {elem} = this.props;
    return (
      <div className="ElemContainer" onClick={() => this.onProperty(elem)} >
          <Row>
            <h3>{elem.title}</h3>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <div className="propertyPicContainer" >
                <img src={elem.img_url} className="propertyPic" />
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="propPriceContainer">
                <span className="propPrice">{'$' + elem.price}</span>
              </div>
              <div className="propInfoContainer">
                <span className="propInfo">{elem.bedroom_number}&middot;<b>Bed</b> {elem.bathroom_number}&middot;<b>Bath</b></span>
              </div>
              <Row >
                <span>{elem.summary}</span>
                <span className="clickLabel">click here</span>
              </Row>
            </Col>
          </Row>

      </div>
    );

  }
}

export default Properties;
