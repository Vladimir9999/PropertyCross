import React, {Component} from 'react';
import {Grid, Col, Row, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propertiesActions from '../actions';

import '../../stylesheets/Container.scss';

class Home extends Component {

  onClickAdd = (elem) => {
    this.props.propertiesActions.addFave(elem);
  };

  onClickDelete = (id) => {
    this.props.propertiesActions.delFave(id);
  };

  render() {
    return (
      <div className="homeContainer">
        <h1>Properties</h1>
        <ul>
          {this.props.properties.map((elem, ind) => {
            return (
              <li key={ind}>
                Title: {elem.title}
                <br />
                <Button onClick={() => this.onClickAdd(elem)}>Add</Button>
              </li>
            );
          })}
        </ul>
        <br />
        <br />
        <h1>Faves</h1>
        <ul>
          {this.props.faves.map((elem, ind) => {
            return (
              <li key={ind}>
                Title: {elem.title}
                <br />
                <Button onClick={() => this.onClickDelete(ind)}>Delete</Button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    properties: state.propertiesReducer.properties,
    faves: state.favesReducer.faves
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    propertiesActions: bindActionCreators(propertiesActions, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
