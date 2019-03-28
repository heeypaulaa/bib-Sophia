import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class CadUsuario extends Component{

	render() {
		const { classes } = this.props;
		return (
			<main style={{display: 'flex'}}>		
				<div className={classes.toolbar}/>	
				<div>
					<Button className={classes.button} variant="contained" size="large" color="primary">
						Empréstimo
					</Button>
					<br/>
					<Button className={classes.button} variant="contained" size="large" color="primary">
						Devolução!!
					</Button>
					<br/>
					<Button className={classes.button} variant="contained" size="large" color="primary">
						Débitos
					</Button>
				</div>
			</main>
		);
	}
}

const drawerWidth = 240;

const style = theme => ({
  button: {
  	margin: 10,
  },
  toolbar: theme.mixins.toolbar,
});


export default withStyles(style)(CadUsuario);