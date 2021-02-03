import React, { Component } from 'react'

class ToDoItem extends Component {
    render() {
        return (
            <li key={this.props.key}>
                {this.props.task}
            </li>
        )
    }
}

export default ToDoItem