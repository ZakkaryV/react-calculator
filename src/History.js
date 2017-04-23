import React, { Component } from 'react';

class History extends Component {

    render() {

        let items = this.props.answers.map((val) => {

            if (this.props.answers.length > 0) {
            return <tr>{val}</tr>
            } else {
                return <li>your history will go here</li>
            }
            
        });

        return (
            <div className="history">
                <h3>History</h3>
                <table>
                   {items}
                </table>
            </div>
        )
    }
}

export default History;
