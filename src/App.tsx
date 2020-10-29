import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import { Button } from '@material-ui/core';

function App() {
  return <div>
    <BrowserRouter>
      <Navigation />
      <Route path="/v2" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  </div>
}

export default App;

