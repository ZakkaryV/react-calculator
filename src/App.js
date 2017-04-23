import React, { Component } from 'react';
import './App.css';
import ButtonGrid from './ButtonGrid';
import Display from './Display';

var Parser = require('expr-eval').Parser;

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: '',
      result: '',
      operations: [],
      isInit: false,
      firstTime: false
    }

    this.resetInitialState = this.resetInitialState.bind(this);
    this.appendChar = this.appendChar.bind(this);
    this.doMath = this.doMath.bind(this);

  }

  appendChar(e) {
    let currentState = this.state;
    let opsArray = this.state.operations;

    if (/[0-9]/g.test(e.target.value)) {
      if (this.state.isInit === true) {
        this.setState({result: e.target.value, isInit: false});
      }
        currentState.result = currentState.result + e.target.value;
        this.setState({currentState});
    } else if (!/[0-9]/g.test(e.target.value)) {
          opsArray.push(parseInt(currentState.result));
          opsArray.push(e.target.value);
        
        if (this.state.firstTime) {
          this.setState({result: this.doMath(opsArray, this.state.result)}); 
        }

      
        this.setState({isInit: true, firstTime: true});
      }
  }

  resetInitialState() {
    this.setState({
      display: '',
      result: '',
      operations: [],
      isInit: false,
      firstTime: false
    })
  }

  doMath(arr, result) {

    let whichOp = arr.length - 1;
    let num = arr[whichOp - 1];
    let answer;

    switch (arr[whichOp]) {
      case '+': 
        answer = num + parseInt(this.state.result);
        console.log('+');
        break;
      }
    
console.log(arr.join(''))
    return answer;
  



/*  let newVal;
    let ops = {
      '+': (num, result) => { return result + num },
      '-': (num, result) => { return result - num },
      '*': (num, result) => { return result * num },
      '/': (num, result) => { return result / num },
    }

    newVal = ops[op](parseInt(num), parseInt(result));

    this.setState({ result: newVal });
    console.log(newVal); */
  }

  render() {
    return (
      <div className="App">
        <div className="calc-container">
          <h2>React Calculator</h2>
          <Display display={this.state.display}
                   result={this.state.result}
                   operations={this.state.operations} />
          <ButtonGrid appendChar={this.appendChar}
                      resetInitialState={this.resetInitialState} />
        </div>
      </div>
    );
  }
}

export default App;
