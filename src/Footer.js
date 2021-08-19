import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>&copy; Ayrat Gimranov</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
