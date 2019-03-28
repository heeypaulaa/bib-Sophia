import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link , withRouter} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';


import TelaCadastro from './menuCadastro/TelaCadastro';
import TelaRelatorio from './menuRelatorio/TelaRelatorio';
import Emprestimo from './Emprestimo';
import Devolucao from './Devolucao';
import Debitos from './Debitos';

class TelaPrincipal extends Component{
	state={
    tituloPagina: 'Login'
  }
  
  componentWillUpdate(nextProps, nextState) { 
  	if (nextState.open == true && this.state.open == false ) 
  		{ this.props.onWillOpen(); } 
  }

  handleClick(){
  	this.props.history.push("/principal/cadastros");
  }

	render() {

		const { classes } = this.props;
    return (
      <div className="App">
        <AppBar className={classes.appBar} color='primary' position ='fixed'>
          <Toolbar>
            <img className="logo" src="./logo.png" alt="Logo"/>
          </Toolbar>
        </AppBar>
          <div className={classes.principal}>
						<Button variant="contained" size="large" color="primary">
							Empréstimo
						</Button>
						<br/><br/><br/>
						<Button variant="contained" size="large" color="primary">
							Devolução
						</Button>
						<br/><br/><br/>
						<Button variant="contained" size="large" color="primary">
							Débitos
						</Button>
					</div>
					<div className={classes.principal}>
						<Button variant="contained" size="large" color="primary" onClick={() => this.handleClick()}>
							Cadastros
						</Button>
						<br/><br/><br/>
						<Button variant="contained" size="large" color="primary">
							Relatórios
						</Button>
					</div>
      </div>
    );


		/*return (
			
		);*/
	}
}
const drawerWidth = 240;

const style = theme => ({
  appBar: {
    height: '10%',
    zIndex: theme.zIndex.drawer + 1,
  },
  principal: {
  	margin: 200,
  	marginleft: '10px',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  paper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

export default withStyles(style)(TelaPrincipal);