import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

export default class App extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    result: '',
    num1: '',
    num2: '',
  }

  this.calculate = this.calculate.bind(this)

}

  calculate = () => {
    
    if ((this.state.num1 === '') || (this.state.num2 === '')) {
      alert('Fill the blank fields');
      return;
    } else {
      var r = this.state.num1 * this.state.num2
      this.setState({ result:'The result is ' + r})
    }

  }

  render() {
    return(

      <div class="container">

        <div class="multiplier">

          <h1 class="title">Number Multiplier</h1>

          <div class="num1">

          <input onChange={ (e) => this.setState({ num1: e.target.value}) }
          value={this.state.num1}
          type="number"
          placeholder="Insert 1º number" />
            
          </div>


          <div class="num2">

          <input onChange={ (e) => this.setState({ num2: e.target.value}) }
          value={this.state.num2}
          type="number"
          placeholder="Insert 2º number" />

          </div>


          <div class="resultContent">

            <button type="submit" onClick={this.calculate}><p>Calculate</p></button>

            <h1>{this.state.result}</h1>

          </div>

        </div>

      </div>

    )
  }
}
