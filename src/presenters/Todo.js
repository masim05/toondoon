import React, {Component} from 'react'

class Todo extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="Todo" data-todo-id={item.id}>
        <h3>{item.title}</h3>
        {item.description}
      </div>
    );
  }
}

export default Todo
