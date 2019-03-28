import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { Form, Container } from "./styles";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

import Login from './Login';
//import TelaPrincipal from './menuPrincipal/TelaPrincipal'
//import TelaCadastro from './menuPrincipal/menuCadastro/TelaCadastro'
//import Register from './Register';

const style = {
  margin: 15,
};

class TelaLogin extends Component {
  state = {
    usuario: "",
    senha: "",
    error: "",
    redirectToReferrer :false
  };



  handleSignIn = async e => {
    e.preventDefault();
    const {usuario, senha} = this.state;
    if(!usuario || !senha){
      this.setState({erro: "Preencha usuário e senha"});
    } else{
      try {
        //const response = await api.post("/sessions", { email, password });
        //login(response.data.token);
        //this.login();
        this.props.history.push("/principal");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
      //this.props.history.push("/telaPrincipal");
    }
  };




/*
  constructor(props){
    super(props);
    var loginButtons=[];
    this.state={
      tituloPagina:'',
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      loginButtons:loginButtons,
      isLogin:true
    }
  }*/
  /*componentWillMount(){
    var loginscreen=[];
    var tituloPagina:'';
    loginscreen.push(<TelaCadastro parentContext={this} appContext={this.props.appContext}/>);
    this.setState({
      loginscreen:loginscreen,
      tituloPagina: tituloPagina
    })
  }*/
  
  /*handleClick(event,userRole){
    console.log("event",userRole);
    var loginmessage;
    let loginscreen=[],loginButtons=[], tituloPagina: 'Tela Login';
    loginButtons.push(
      <div>
      <MuiThemeProvider>
        <div>
           <Button label="Register as Student" style={style} onClick={(event) => this.handleClick(event,'student')}/>
       </div>
       </MuiThemeProvider>
       <MuiThemeProvider>
       <div>
          <Button label="Register as Teacher" style={style} onClick={(event) => this.handleClick(event,'teacher')}/>
      </div>
      </MuiThemeProvider>
      </div>
    )
    loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} role={userRole}/>);
    loginmessage = "Not Registered yet.Go to registration";
    this.setState({
      tituloPagina: tituloPagina,
      loginscreen:loginscreen,
      loginmessage:loginmessage,
      loginButtons:loginButtons,
      isLogin:true
    })
  }*/

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    // if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img className="logo" src="../logo.png" alt="Logo"/>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Usuário"
            onChange={e => this.setState({ usuario: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ senha: e.target.value })}
          />
          <Button type="submit" color='primary'>Entrar</Button>
        </Form>
      </Container>
    );
  }
}/*
  render() {
    return (
      <div className="TelaLogin" key="telaLogin">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}*/


export default TelaLogin;