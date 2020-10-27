import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import './connexion.scss'
import { api } from "../../helpers/api";

const Connexion = () => {
  const history = useHistory();
  const username = useRef(null);
  const password = useRef(null);
  const submit = e => {
    api
      .post("/starwars/login", {
        username: username.current.value,
        password: password.current.value
      })
      .then(res => {
        if (res.data.status === 200) {
          localStorage.setItem("token", res.data.token);
          history.push("/");
        } else {
          alert(
            "Vous n'avez pas rentré un password et un username valide veuillez réessayer"
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return(
    <div className='form'>
    Veuillez rentrez votre email et votre password pour vous connecter
    <form
      onSubmit={e => {
        e.preventDefault(e);
        submit(e);
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        ref={username}
        id="username"
        type="text"
        name="email"
        placeholder="Veuillez rentrer votre email"
      />
      <label htmlFor="password">Password</label>
      <input
      id="password"
        ref={password}
        type="text"
        name="password"
        placeholder="Veuillez rentrer votre password"
      />

      <input type="submit" value="Submit" />
    </form>
  </div>
  )
};

export default Connexion