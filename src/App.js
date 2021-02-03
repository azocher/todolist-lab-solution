import React, { Component } from 'react'
import './App.css'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  constructor(props) {
    super()

    this.state = {
      taskList: [],
      newItem: ''
    }
  }
  
  addItem = (e) => {
    e.preventDefault()

    let tempTask = this.state.taskList
    tempTask.push(this.state.newItem)

    this.setState({
      taskList: tempTask,
      newItem: ''
    })
  }

  updateItem = (e) => {
    this.setState({newItem: e.target.value})
  }

  clearItems = (e) => {
    e.preventDefault()

    this.setState({
      taskList: []
    })
  }

  render() {
    let toDoItems = this.state.taskList.map((item, index) => {
      return (
        <ToDoItem task={item} key={index} />
      )
    })

    return (
      <div>
        <ul>
          {toDoItems}
        </ul>
        <form>
          <input type="text" placeholder="Add a todo list item" value={this.state.newItem} onChange={(e) => this.updateItem(e)} />
          <button type="submit" onClick={(e) => this.addItem(e)}>Submit</button>
          <button onClick={(e) => this.clearItems(e)}>Clear List</button>
        </form>
      </div>
    )
  }
}

export default ToDoList


