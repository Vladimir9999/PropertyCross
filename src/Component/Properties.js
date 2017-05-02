import React, {Component} from 'react';
import {Grid, Col, Row, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import propertiesActions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../stylesheets/Container.scss';
import '../../stylesheets/Label.scss';




class Properties extends Component {
  onClickAdd = (elem) => {
    this.props.propertiesActions.addFave(elem);
  };
  render() {
    let {elem} = this.props;
    return (
      <div className="ElemContainer">
        <div className="propertyDescrContainer">
          <Row>
            <h3>{elem.title}</h3>
          </Row>
          <Row>
            <div className="propPriceContainer">
              <span className="propPrice">{elem.price + '$'}</span>
            </div>
            <div className="propTypeContainer">
              <span className="propType">{'type: ' + elem.property_type}</span>
            </div>
          </Row>
        </div >
        <Col xs={6} md={4}><div className="propertyPicContainer">
          <img src={elem.img_url} className="propertyPic" />
        </div></Col>
      </div>
    );

  }
}

//<Button onClick={() => this.onClickAdd(elem)}>Add</Button>

export default Properties;
