import React, { Component } from 'react';

class ButtonGrid extends Component {

  render() {
    return (
      <div className="button-container">
            <div className="top-row">
                <button type="submit" onClick={this.props.backButton} ><i className="fa fa-reorder"></i></button>
                <button type="submit" onClick={this.props.resetInitialState} value={'1'}>C</button>
                <button type="submit" onClick={this.props.backButton} ><i className="fa fa-long-arrow-left"></i></button>
            </div>

            <div className="2nd-row">
                <button type="submit" onClick={this.props.appendChar} value={'7'}>7</button>
                <button type="submit" onClick={this.props.appendChar} value={'8'}>8</button>
                <button type="submit" onClick={this.props.appendChar} value={'9'}>9</button>
                <button type="submit" onClick={this.props.appendChar} value={'+'}>+</button>
            </div>

            <div className="3rd-row">
                <button type="submit" onClick={this.props.appendChar} value={'4'}>4</button>
                <button type="submit" onClick={this.props.appendChar} value={'5'}>5</button>
                <button type="submit" onClick={this.props.appendChar} value={'6'}>6</button>
                <button type="submit" onClick={this.props.appendChar} value={'-'}>-</button>
            </div>

            <div className="4th-row">
                <button type="submit" onClick={this.props.appendChar} value={'1'}>1</button>
                <button type="submit" onClick={this.props.appendChar} value={'2'}>2</button>
                <button type="submit" onClick={this.props.appendChar} value={'3'}>3</button>
                <button type="submit" onClick={this.props.appendChar} value={'*'}>*</button>
            </div>

            <div className="5th-row">
                <button type="submit" onClick={this.props.appendChar} value={'0'}>0</button>
                <button type="submit" onClick={this.props.appendChar} value={'.'}>.</button>
                <button type="submit" onClick={this.props.appendChar} value={'/'}>/</button>
            </div>

            <div className="6th-row">
                <button type="submit" className='equals-btn' onClick={this.props.appendChar} value={'='}>=</button>
            </div>
      </div>
    );
  }
}

export default ButtonGrid;
