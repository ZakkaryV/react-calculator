import React, { Component } from 'react';
import './App.css';
import ButtonGrid from './ButtonGrid';
import Display from './Display';
import History from './History';

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: '',
      result: '',
      operations: [],
      values: [],
      newNum: false,
      answers: [],
    }

    this.resetInitialState = this.resetInitialState.bind(this);
    this.appendChar = this.appendChar.bind(this);
    this.doMath = this.doMath.bind(this);
    this.backButton = this.backButton.bind(this);

  }

  appendChar(e) {

    // if integer is pressed

    if (/[0-9.]/g.test(e.target.value)) {

      let newVal = this.state.result + e.target.value;
      this.setState({result: newVal});

      // after operator is pressed, allow overwrite of state.result

      if (this.state.newNum) {

        this.setState({result: e.target.value, newNum: false})

      }



    }

    // if operator is pressed

    else if (/[*-/+]/g.test(e.target.value)) {

      let addOp  = this.state.operations;

      if (this.state.result) {
      addOp.push(this.state.result);
      addOp.push(e.target.value);
      }


      this.doMath(this.state.result, this.state.operations);

      this.setState({operations: addOp, newNum: true})

    } 

    // if = sign is pressed

    else if (/[=]/g.test(e.target.value)) {

      let array = this.state.operations;
      array.push(this.state.result);
      let newResult = eval( array.join(' ') );
      let newAnswers = this.state.answers;
      newAnswers.push(newResult);
      this.setState({result: newResult, operations: [], newNum: true});

      console.log(this.state.answers);

    }



  }

  resetInitialState() {
    this.setState({
      display: '',
      result: '',
      operations: [],
    })
  }

  doMath(curr, arr) {

    let storeVal = arr.pop();
    let newVal = this.state.values;
    newVal.push(eval(arr.join(' ')));
    Math.round(newVal * 100 / 100);
    this.setState({values: newVal, result: newVal[newVal.length -1]});
    console.log(  this.state.values  );
    arr.push(storeVal);

  }

  backButton() {

    if (this.state.result !== '') {
      let newResult = this.state.result.substring(0, this.state.result.length - 1);
      this.setState({result: newResult});
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
                      resetInitialState={this.resetInitialState} 
                      backButton={this.backButton} />
          <History answers={this.state.answers} />
        </div>
      </div>
    );
  }
}

export default App;
