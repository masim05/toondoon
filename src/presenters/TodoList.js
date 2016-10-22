import React, {Component} from 'react'
import Todo from './Todo'
import CreateNewTodoButton from '../containers/CreateNewTodoButton'

class TodoList extends Component {
  render() {
    let items = [];
    this.props.items.forEach(i => {
      items.push(<li key={i.id}><Todo column={this.props.column} item={i}/></li>)
    });
    return (
      <div className="TodoList">
        <ul>
          {items}
        </ul>
        {(this.props.column === 'new') ? <CreateNewTodoButton /> : undefined}
      </div>
    );
  }
}

export default TodoList
