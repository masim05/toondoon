import React, {Component} from 'react'
import TodoList from './TodoList'

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
    );
  }
}

export default Board
