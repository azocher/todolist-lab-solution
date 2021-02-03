import React, { Component } from 'react'

class ClearList extends Component {
    render() {
        return (
            <button onClick={(e) => this.props.clearItems(e)}>Clear List</button>
        )
    }
}

export default ClearList