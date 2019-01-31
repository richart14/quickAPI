import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import './styles/App.css';
import Menu from './Menu';
import LandingPage from './LandingPage';
import News from './News';
import Youtube from './Youtube';
import Weather from './Weather';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Menu />
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/news" component={News} />
            <Route exact path="/youtube" component={Youtube} />
            <Route exact path="/weather" component={Weather} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
