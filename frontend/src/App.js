import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";

import NavBar from "./components/NavBar";
import WelcomeContainer from "./components/WelcomeContainer";

import PropagateLoader from "react-spinners/PropagateLoader";

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
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <PropagateLoader size={150} color={"#123abc"} />
        </div>
      ) : (
        <>
          <NavBar isLoaded={isLoaded} />
          <Switch>
            <Route exact path="/welcome">
              <WelcomeContainer />
            </Route>
            <Route exact path="/home">
              <p>landing</p>
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
