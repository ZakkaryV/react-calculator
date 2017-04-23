import React, { Component } from 'react';
import './App.css';
import ButtonGrid from './ButtonGrid';
import Display from './Display';

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: '',
      result: '',
      operations: [],
      isInit: false,
      firstTime: false,
      canPress: true,
      valuesList: [],
      prevVal: '',
      prevOp: '',
    }

    this.resetInitialState = this.resetInitialState.bind(this);
    this.appendChar = this.appendChar.bind(this);
    this.doMath = this.doMath.bind(this);

  }

  appendChar(e) {
    let currentState = this.state;
    let opsArray = this.state.operations;

    if (/[0-9]/g.test(e.target.value)) {

      this.setState({canPress: true});
      
      if (this.state.isInit === true) {
        this.setState({result: e.target.value, isInit: false});
        this.setState({prevVal: e.target.value});
      } else {
        currentState.result = currentState.result + e.target.value;
        this.setState({currentState});
      }
    } else if (/=/g.test(e.target.value)) {

        let acc = this.state.operations;
        let store = acc.pop();
        acc.push(this.state.prevOp);
        acc.push(parseInt(this.state.prevVal));
        console.log(acc)
        this.resetInitialState();
        this.setState({result: eval(acc.join(' ')) });
        acc.push(store);

    } else if (!/[0-9=]/g.test(e.target.value) && this.state.canPress) {
          this.setState({canPress: false});
          opsArray.push(parseInt(currentState.result));
          opsArray.push(e.target.value);
          
          if (this.state.firstTime) {
              this.doMath(opsArray);
          }

          this.setState({prevOp: e.target.value })
          this.setState({isInit: true, operations: opsArray, firstTime: true});
    }
  }

  resetInitialState() {
    this.setState({
      display: '',
      result: '',
      operations: [],
      isInit: false,
      firstTime: false,
      canPress: true,
      valuesList: []
    })
  }

  doMath(arr) {

    let index = arr[1];

    let ops = {
      '+': () => { return arr[0] + arr[2] },
      '-': () => { return arr[0] - arr[2] },
      '*': () => { return arr[0] * arr[2] },
      '/': () => { return arr[0] / arr[2] },
    }

    if (this.state.operations.length < 5) {
      let newArray = [ ops[index]() ]
      this.setState({result: newArray[0]}, );
    } else {
      let acc = this.state.operations;
      let store = acc.pop();
      this.setState({result: eval(acc.join(' ')) });
      acc.push(store);
    }
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
