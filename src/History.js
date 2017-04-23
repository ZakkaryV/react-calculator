import React, { Component } from 'react';

class History extends Component {

    render() {

        let items = this.props.answers.map((val) => {

            if (this.props.answers.length > 0) {
                return <li>{val}</li>
            }
            
        });

        return (
            <div className="history">
                <h3>History</h3>
                <ul>
                   {items}
                </ul>
            </div>
        )
    }
}

export default History;
