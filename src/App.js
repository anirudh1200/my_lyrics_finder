import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appbar from './components/layout/Appbar.js';
import Index from './components/layout/Index.js';
import Lyrics from './components/songs/Lyrics';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Fragment>
                <Appbar />
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/lyrics' component={Lyrics} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
