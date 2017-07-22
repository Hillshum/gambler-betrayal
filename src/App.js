import React, { Component } from 'react';

import RiggedDie from 'gamblers-dice'
import shuffle from 'shuffle-array'

import Die from './components/die'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.dice = Array(8).fill().map(()=>new RiggedDie(3))
    this.state = {
      rolls: [],
      numDice: 6,
    }
    this.reroll = this.reroll.bind(this)
  }


  reroll() {
    const toShuffle = [...this.dice]
    shuffle(toShuffle)
    toShuffle.splice(this.state.numDice)
    this.setState({
      rolls: toShuffle.map(die=>die.roll() -1)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Gamber's Dice for Betrayal at House on the Hill</h2>
        </div>
        <div className="main">
          {this.state.rolls.map((roll)=><Die rolled={roll} />)}
        </div>
        <select value={this.state.numDice} onChange={({target:{value}})=>{
          this.setState({numDice: value})}}>
          {Array(8).fill().map((num, index)=>(
            <option key={index}>{index + 1}</option>
          ))}
        </select>
        <button onClick={this.reroll}>Re roll</button>
      </div>
    );
  }
}

export default App;
