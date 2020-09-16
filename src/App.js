import React from 'react';
import Navigation from "./components/Navigation";
import OAuth2RedirectHandler from "./components/OAuth2RedirectHandler";
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
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
      </Container>
        <br/>
    </div>
  );
}

export default App;
