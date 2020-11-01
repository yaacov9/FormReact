import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1>Welcome to Balink</h1>
        <img src="http://balink.net/wp-content/uploads/2015/12/logo-ba.png" alt="" />
      </div>
    );
  }
}
export default Header;