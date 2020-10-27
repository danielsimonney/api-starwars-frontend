// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, { useState, useEffect } from "react";
import { api, loadAuthorisationHeader } from "./helpers/api";
import { Redirect, Route } from "react-router-dom";
import Header from "./components/Header";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  // Add your own authentication on the below line.
  useEffect(() => {
    let mounted = true;
    let urlToFetch = "/starwars/species";
    api
      .get(urlToFetch, loadAuthorisationHeader())
      .then(res => {
        if (mounted) {
          setIsLoggedIn(true);
        }
      })
      .catch(err => setIsLoggedIn(false));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn === false ? (
          <Redirect
            to={{ pathname: "/connexion", state: { from: props.location } }}
          />
        ) : isLoggedIn === undefined ? (
          <div>Loading</div>
        ) : (
          <div>
            <Header />
            <Component {...props} />
          </div>
        )
      }
    />
  );
};

export default PrivateRoute;