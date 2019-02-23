import React, { Component } from 'react';
import './App.css';

import IsometricRect from './components/isometric-rect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Code this blog</p>
        <IsometricRect/>
      </div>
    );
  }
}

export default App;
