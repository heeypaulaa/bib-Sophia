import React, { Component } from 'react';
import Routes from "./Rotas";

import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import './App.css';
import PagInicial from './pagInicial/TelaLogin';

//injectTapEventPlugin();


const App = () => <Routes />;
export default App;

/*class App extends Component {

  constructor(props){
    super(props);
    this.state={
      loginPage:[]
      //uploadScreen:[]
    }
  }

  componentWillMount(){
    var loginPage = [];
    var tituloPagina = '';
    loginPage.push(<PagInicial appContext={this.props.appContext}/>);
    
    this.setState({
      loginPage:loginPage,
      tituloPagina: tituloPagina
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar className={classes.appBar} color='primary' position ='fixed'>
          <Toolbar>
            <img className="logo" src="./logo.png" alt="Logo"/>
            {this.state.tituloPagina}
          </Toolbar>
        </AppBar>
        
          {this.state.loginPage}
      </div>
    );
  }
}

const drawerWidth = 240;

const style = theme => ({
  appBar: {
    height: '10%',
    zIndex: theme.zIndex.drawer + 1,
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

export default withStyles(style)(App);*/