import React from 'react';
import logo from './react.svg';
import './Home.css';
import Hello from './Hello';

/**
* The Home component for the landing page.
*/
class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p><Hello name="CDS-SNC" /></p>
      </div>
    );
  }
}

export default Home;
