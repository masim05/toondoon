import React, {Component} from 'react'
import Todo from './Todo'
import CreateNewTodoButton from '../containers/CreateNewTodoButton'

class TodoList extends Component {
  render() {

    return (
      <div className="TodoList">
        <Todo column={this.props.column}/>
        <Todo column={this.props.column}/>
        <Todo column={this.props.column}/>
        {(this.props.column === 'new') ? <CreateNewTodoButton /> : undefined}
      </div>
    );
  }
}

export default TodoList
