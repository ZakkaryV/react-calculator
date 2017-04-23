import React, { Component } from 'react';

class Display extends Component {

    render() {
        let ops = this.props.operations.map((val) => {
            return <span className="operation">{val}</span>
        });

        return (
            <div className="display">
                <div className="operations">
                    {ops}
                </div>
                <div className='result'>
                    {this.props.result}
                </div>
                <div className='display-string'>
                    {this.props.display.toString()}
                </div>
            </div>
        )
    }
}

export default Display;
