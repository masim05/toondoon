import React, {Component} from 'react'
import CloseDoneTodoButton from '../containers/CloseDoneTodoButton'

class Todo extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="Todo" data-todo-id={item.id}>
        <h3>{item.title}</h3>
        {item.description}
        {
          (this.props.column === 'done') ?
            <CloseDoneTodoButton item={item}/> :
            undefined
        }
      </div>
    );
  }
}

export default Todo
