import React, { Component } from 'react';
import Codos from './todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Read a book'},
      {id: 2, content: 'attend classes'}
    ]
  }
  deleteTodo = (id) => {
    const todos  = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      // todos: todos would have been the case but since the key and the 
      // value have the same name we can write it just like below (ES6 short hand)
      todos
    })
  }

  render() {
    return (
      <div className="todos-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Codos todos={this.state.todos} deleteTodo={this.deleteTodo}></Codos>
      </div>
    );
  }
}

export default App;
