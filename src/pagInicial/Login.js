import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      tituloPagina: 'Login',
      username:'',
      password:''
    }
  }

  handleClick(event){
    console.log("event");
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              style={{margin:15, marginTop: 70}}
              name = "username"
              variant = "outlined"
              label = "Username"
              onChange = {(event,newValue) => this.setState({username:newValue})}
            />
            <br/>
            <TextField
              style={style}
              name = "password"
              variant = "outlined"
              type="password"
              label="Password"
              onChange = {(event,newValue) => this.setState({password:newValue})}
            />
            <br/>
            <Button variant="contained" color="primary" style={style} onClick={(event) => this.handleClick(event)}>
              Submit
            </Button>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;