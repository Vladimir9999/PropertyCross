import React, {Component} from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';
import '../../stylesheets/Form.scss';

class Header extends Component {
  onSearch() {
    const location = this.searchInput.value;
    if (location) {
      this.props.getProperties(location);
    }
  };
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand pullLeft>
            <Link to="/">PropertyCross</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/faves">Faves</Link>
            </NavItem>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <input className="searchInput" type="text" placeholder="Search" defaultValue="" ref={(input) =>  this.searchInput = input}/>
            </FormGroup>
            {' '}
            <Button type="submit" onClick={this.onSearch.bind(this)}>Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
