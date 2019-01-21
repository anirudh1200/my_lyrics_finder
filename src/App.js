import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import frontPic from './frontPic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <img src={frontPic} alt='Front Pic' id='frontPic' />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
