import React from 'react';
import Navigation from "./components/Navigation";
import Container from "reactstrap/lib/Container";
import {Route} from "react-router";
import EndUser from "./pages/EndUser";
import M2M from "./pages/M2M";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <br/>
      <Container>
          <Route path="/" exact component={EndUser} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/m2m" exact component={M2M} />
      </Container>
        <br/>
    </div>
  );
}

export default App;
