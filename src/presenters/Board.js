import React, {Component} from 'react'
import TodoList from './TodoList'

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <TodoList column="new" items={this.props.column.new.items}/>
        <TodoList column="inprogress" items={this.props.column.inprogress.items}/>
        <TodoList column="done" items={this.props.column.done.items}/>
      </div>
    );
  }
}

export default Board
