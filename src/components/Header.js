import React from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {selectLangage} from "../redux/wookie/wookie.selector";
import {switchLangage} from "../redux/wookie/wookie.action"
import { createStructuredSelector } from "reselect";


const Header = ({switchLangage,wookie}) => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/connexion");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <span className="ml-5 navbar-brand">
          Starwars website
      </span>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link" to={`/`} >Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={`/type/people`} >People</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={`/type/films`} >Films</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={`/type/vehicles`} >Vehicles</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={`/type/starships`} >Starships</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={`/type/planets`} >Planets</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={`/type/species`} >Species</Link>
            </li>
          </ul>
          <span className="navbar-text">
            Langue actuelle : {wookie ? "wookie":"anglais"}
          </span>
          <button className="btn btn-outline-success mr-4 ml-4 my-2 my-sm-0" onClick={() => switchLangage()} type="submit">Switch langage</button>
          <button
                className="btn btn-danger mr-5"
                onClick={() => logout()}
              >
                Logout
          </button>
          <span className="navbar-text">
            
          </span>
        </div>
      </nav>
      {/* <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={`/`}>
          <a classNameName="navbar-brand" href="#">
            Page d'acceuil
          </a>
        </Link>
        <div classNameName="collapse navbar-collapse" id="navbarNav">
          <ul classNameName="navbar-nav">

          <li classNameName="nav-item">
              Langue actuelle : {wookie ? "wookie":"anglais"}
            </li>
          <li classNameName="nav-item">
              <button
                className="btn btn-dark bg-primary"
                onClick={() => switchLangage()}
              >
                Changer la langue courante
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-dark bg-primary"
                onClick={() => logout()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

      </nav> */}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  switchLangage: () => dispatch(switchLangage())
});

const mapStateToProps = createStructuredSelector({
  wookie:selectLangage
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);