import React, { Component } from 'react';
import Image from './Components/Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "https://http.cat/405" } />
      </div>
    );
  }
}

export default App;
