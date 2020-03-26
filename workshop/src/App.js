import React, {Component} from 'react'

class TodoList extends Component {
  constructor () {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    }
  }
addItem = (event) => {
  event.preventDefault();
  console.log("The addItem method executed");

}

handleChange = (event) => {
  console.log(event.target.value);
}

  render() {
    return (
      <div className='contianer'>
        <form onSubmit={this.addItem}>
        <label htmlFor="taskName">Task Name:</label>
        <input onChange={this.handleChange}name="taskName"type="text"placeholder="Add todo here!" />
        <button type="submit">Add Task</button>
        </form>
    </div>
  )
  }
}


export default ToDoList;
