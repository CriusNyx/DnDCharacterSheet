import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPanel from './MainPanel.js';
import CharacterData from './CharacterData.js';

const characterData = new CharacterData({});

class App extends Component {

  render() {

    // alert(window.location.hostname);

    return (
      <div className="App">
        <div className="App-header">
          <CharacterData/>
          <MainPanel/>
          <div style={{height: '100px'}}/>
        </div>
      </div>
    );
  }
}

export default App;
