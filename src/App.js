import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check: [
        {
          id: 1,
          task: "Walk the dog"
        },
        {
          id: 2,
          task: "Go shopping"
        }
      ]
    };
  }

  deleteTodo = id => {
    let delTodo = this.state.check.filter(item => {
      return item.id !== id;
    });
    this.setState({ check: delTodo });
  };

  addTodo = tdo => {
    tdo.id = Math.random();
    let check = [...this.state.check, tdo];
    this.setState({ check });
  };

  render() {
    return (
      <div style={{width:'50%',margin:'0 auto',backgroundColor:'#e9ecef',textAlign:'center',borderRadius:'10px'}}>
        <h1 style={{ color: "#212529" }}>Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.check} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
