import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import CadCalendario from './CadUsuario';
//import CadExemplar from './CadUsuario';
import CadUsuario from './CadUsuario';

class TelaCadastro extends Component{

	state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

	render() {
		const { classes } = this.props;
		const { expanded } = this.state;
		return (
			<div>
				<Drawer className={classes.drawer} variant="permanent">
	        <div className={classes.toolbar} />
            <MuiExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        			<MuiExpansionPanelSummary>
          			Cadastro
        			</MuiExpansionPanelSummary>
        			<MuiExpansionPanelDetails>
		            <List>
				          {['All mail', 'Trash', 'Spam'].map((text, index) => (
				            <ListItem button key={text}>
				              <ListItemText primary={text} />
				            </ListItem>
				          ))}
				        </List>
        			</MuiExpansionPanelDetails>
      			</MuiExpansionPanel>
      			<MuiExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        			<MuiExpansionPanelSummary>
          			Relatório
        			</MuiExpansionPanelSummary>
        			<MuiExpansionPanelDetails>
		            <List>
				          {['All mail', 'Trash', 'Spam'].map((text, index) => (
				            <ListItem button key={text}>
				              <ListItemText primary={text} />
				            </ListItem>
				          ))}
				        </List>
        			</MuiExpansionPanelDetails>
      			</MuiExpansionPanel>
          	<List>
          		<ListItem button >
          			Débitos
          		</ListItem>
          		<Divider/>
          		<ListItem button >
          			Empréstimo
							</ListItem>
							<Divider/>
							<ListItem button >
          			Devolução
        			</ListItem>

				    </List>
      	</Drawer>
      	<main>
      		<div className={classes.toolbar}/>
      		<div className={classes.content}>
      			{this.state.cadUsuTela}
      		</div>
      	</main>
			</div>
		);
	}
}

const drawerWidth = 240;

const style = theme => ({
	root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  paper: {
    width: drawerWidth,
  },
  content: {
  	marginLeft: 145,
    flexGrow: 1,
    padding: theme.spacing.unit,
  },
  toolbar: theme.mixins.toolbar,
});

export default withStyles(style)(TelaCadastro);