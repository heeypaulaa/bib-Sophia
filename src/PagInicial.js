import React, { Component } from 'react';
//import './App.css';

function Botoes(props) {
  return(
    <button className="botoes" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class PagInicial extends Component {
  renderButton(i) {
    return (
      <Botoes value={i} />
    );
  }

  render() {
    return (
      <div className="PagInicial">
        <form>
          Título <input type="text" defaultValue="text"/>
          <br/>Senha <input type="password" defaultValue="secret" />
          <input type="checkbox" checked readOnly label="checkbox"/>
          <input type="radio" checked readOnly label="radio"/>
          <input type="textarea" defaultValue="textarea" />
          <input type="static" value="teste" />
        </form>
      </div>
    );
  }
}

export default PagInicial;