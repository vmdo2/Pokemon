import React, { Component } from 'react';
import {BrowserRouter as Route, Router, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import Detail from './???/Detail/Detail.js';
import Search from './???/Search/Search.js';
import Gallery from './??/Gallery/Gallery.js';

class App extends Component {
  render() {
    return (
      <Router basename="/409-mp2">
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/char/:id" component={Detail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;