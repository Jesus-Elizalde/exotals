import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import WelcomeContainer from "./components/WelcomeContainer";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar isLoaded={isLoaded} />
          <Switch>
            <Route path="/welcome">
              <WelcomeContainer />
            </Route>
            <Route path="/home">
              <p>landing</p>
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
