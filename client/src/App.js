import React from 'react';
import logo from '../src/womensworldcup.png';
import './App.css';
import CardForPlayers from './components/CardForPlayers';
// import styled from "styled-components";

// const PlayerCard = styled.div`
// font-size: 50px;
// `;



class App extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      // create data keys from the api
      players: [],
      country: []
    };
  }
  // use fetch to get keys data
  componentDidMount() {
    console.log("CDM");
    fetch("http://localhost:5000/api/players")
      .then(response => response.json())
      .then(response => this.setState({ players: response }))
      .catch(err => console.log("error"));
}


  render() {
    console.log("rendering");
    console.log(this.state.players);
    return (
      <div>
        {/* <PlayerCard> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="womens world cup logo" />
          <h1>Women's World Cup ⚽</h1>
        </header>
        
        <CardForPlayers players={this.state.players}/>
        
        
        {/* </PlayerCard> */}
      </div>
    );
  }
}

export default App;
