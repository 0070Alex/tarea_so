import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenidos a Sistemas Operativos</h1>
        </header>
        <p className="App-intro">
          Sistemas Operativos 1 <span>Douglas Alexander Sacalxot Elias</span>
        </p>
      </div>
      
      	
		<h1>Caja 3</h1>
			<p>En esta caja, que también comienza con un párrafo, seguiremos con una tabla:
		<table>
			<caption>Tabla de Ejemplo</caption>
			<tr>
				<td class="vacio"></td>
				<th>izquierda</th>
				<th>centro</th>
				<th>derecha</th>
			</tr>
			<tr>
				<th>primero</th>
				<td>primero-izquierda</td>
				<td>primero-centro</td>
				<td>primero-derecha</td>
			</tr>
			<tr>
				<th>segundo</th>
				<td>segundo-izquierda</td>
				<td>segundo-centro</td>
				<td>segundo-derecha</td>
			</tr>
			<tr>
				<th>tercero</th>
				<td>tercero-izquierda</td>
				<td>tercero-centro</td>
				<td>tercero-derecha</td>
			</tr>
		</table>
	
    );
  }
}

export default App;
