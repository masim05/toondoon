import React, {Component} from 'react'
import Todo from './Todo'
import CreateNewTodoButton from '../containers/CreateNewTodoButton'

class TodoList extends Component {
  render() {
    let items = [];
    this.props.items.forEach(i => {
      items.push(<Todo column={this.props.column} item={i} key={i.id}/>)
    });
    return (
      <div className="TodoList">
        {items}
        {(this.props.column === 'new') ? <CreateNewTodoButton /> : undefined}
      </div>
    );
  }
}

export default TodoList
