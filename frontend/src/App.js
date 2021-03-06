import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import * as sessionActions from "./store/session";
import * as carsActions from "./store/cars";
import * as makesActions from "./store/makes";
import * as modelsActions from "./store/models";
import * as utildataAction from "./store/utildata";
import * as reviewsAction from "./store/reviews";
import * as favoritesAction from "./store/favorites";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import WelcomeContainer from "./components/WelcomeContainer";
import HomeContainer from "./components/HomeContainer";
import MyCarContainer from "./components/MyCarContainer";
import DetailContainer from "./components/DetailContainer";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(carsActions.getAllCars());
    dispatch(makesActions.getAllMakes());
    dispatch(modelsActions.getAllModels());
    dispatch(utildataAction.getAllUtilData());
    dispatch(reviewsAction.getAllReviews());
    dispatch(favoritesAction.getAllFav());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
              {user !== undefined ? (
                <MyCarContainer />
              ) : (
                <Redirect to="/welcome" />
              )}
            </Route>
            <Route path="/cars/:id">
              <DetailContainer />
            </Route>
            <Route>
              <div className="PageNotFound">
                <h1>Page Not Found!</h1>
                <a href="/welcome">
                  <button className="pnfbutton">Exit</button>
                </a>
              </div>
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
