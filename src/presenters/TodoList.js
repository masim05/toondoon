import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <Todo />
        <Todo />
        <Todo />
      </div>
    );
  }
}

export default TodoList
