import React, {Component} from 'react'
//import {connect} from 'react-redux'
//import {createNewTodo} from '../actions'

class CreateNewTodoButton extends Component {
  render() {
    let input;

    return (
      <div className="CreateNewTodoButton">
        <form onSubmit={e => {
          console.log('onSubmit', e)
        }}>
          <input ref={node => {
            input = node
          }}/>
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default CreateNewTodoButton
