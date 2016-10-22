import React, {Component} from 'react'
import Board from './presenters/Board'
import exampleState from './exampleState.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board column={exampleState}/>
      </div>
    );
  }
}

export default App;
