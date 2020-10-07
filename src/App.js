import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import {useAuth0} from '@auth0/auth0-react';
import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import SearchBar from './components2/SearchBar';
import About from './components/about';
import TheTeam from './components/theteam';
import axios from 'axios';
import "./App.css";
import GoogleSheetAPI from './components2/GoogleSheetAPI';

const App = () => {
  const {isLoading, user} = useAuth0();

  if (isLoading) {
    return <Loading/>
  }

if (user) {
  console.log(user)
  axios.post('https://lyncovid-new-backend.herokuapp.com/api/users/login', {
    email: user.email,
    first_name: user.given_name,
    last_name: user.family_name,
  }).then (response => console.log(response))
}
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path = '/studentlist'
            render={(props)=>(
              <div width="100%">
              <GoogleSheetAPI {...props} user = {user}/>
              </div>
            )}
          />
          <Route
            path = '/gettingstarted'
            render={(props)=>(
              <div width="100%">
              <About {...props} user = {user}/>
              </div>
            )}
          />

        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
