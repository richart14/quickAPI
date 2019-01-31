import React, { Component } from 'react';
import './styles/App.css';
import Menu from './Menu';
import LandingPage from './LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Menu />
      </div>
    );
  }
}

export default App;
