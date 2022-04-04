import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import * as sessionActions from "./store/session";
import * as carsActions from "./store/cars";
import * as makesActions from "./store/makes";
import * as modelsActions from "./store/models";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import WelcomeContainer from "./components/WelcomeContainer";
import HomeContainer from "./components/HomeContainer";
import MyCarContainer from "./components/MyCarContainer";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(carsActions.getAllCars());
    dispatch(makesActions.getAllMakes());
    dispatch(modelsActions.getAllModels());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [isLoaded]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar isLoaded={isLoaded} />
          <Switch>
            <Route exact path="/">
              <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
              <WelcomeContainer />
            </Route>
            <Route path="/home">
              <HomeContainer />
            </Route>
            <Route path="/mycars">
              <MyCarContainer />
            </Route>
            <Route>
              <p>page not found</p>
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
