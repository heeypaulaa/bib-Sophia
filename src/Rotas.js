import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


import Login from './pagInicial/TelaLogin';
import telaPrincipal from './pagInicial/menuPrincipal/TelaPrincipal'
import telaCadastro from './pagInicial/menuPrincipal/menuCadastro/TelaCadastro'
import telaRelatorio from './pagInicial/menuPrincipal/menuRelatorio/TelaRelatorio'
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function Rotas() {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/principal" component={telaPrincipal} />
        //<Route path="/principal/cadastros" component={telaCadastro} />
        //<Route path="/principal/relatorios" component={telaRelatorio} />
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default Rotas;
