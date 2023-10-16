import React, { Component } from 'react';
import {BrowserRouter as Route, Router, Routes} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import Detail from './Query/Detail/Detail.js';
import Search from './Query/Search/Search.js';
import Gallery from './Query/Gallery/Gallery.js';

class App extends Component {
  render() {
    return (
      <Router basename="/mp2">
        <Routes>
          {/* <Route exact path="/" component={Search}/> */}
          <Route exact path="/gallery" component={Gallery}/>
          {/* <Route exact path="/pokemon/:id" component={Detail}/> */}
        </Routes>
      </Router>
    );
  }
}

export default App;