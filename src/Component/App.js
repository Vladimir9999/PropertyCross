import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propertiesActions from '../actions';

class App extends Component {

    getProperties = (location) => {
      let url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=';
      url = url + location;
      fetch(url).then((response) => response.json()).then((responseJson) => {

        this.props.propertiesActions.addProp(responseJson.response.listings);
        //propertyStore.dispatch({type: 'ADD_PROP', payload: responseJson});
        //this.setState(properties, responseJson);
      });
    };
    render() {
      return (
        <div className="appContainer">
          <Header getProperties={this.getProperties} />
          <div className="mainContainer">
            {this.props.children}
          </div>
          <Footer />
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    propertiesActions: bindActionCreators(propertiesActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
