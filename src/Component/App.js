import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    getProperties = (location) => {
      let url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=';
      url = url + location;
      fetch(url).then((response) => response.json()).then((responseJson) => {
        this.setState(properties, responseJson);
      });
    };
    render() {
    return (
      <div className="appContainer">
        <Header getProperties={this.getProperties} />
        <div className="mainContainer" value={this.properties}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
