import React, {Component} from 'react'
import TodoList from './TodoList'

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <TodoList column="new"/>
        <TodoList column="inprogress"/>
        <TodoList column="done"/>
      </div>
    );
  }
}

export default Board
