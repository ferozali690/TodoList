import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    task: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      task: ""
    });
  };

  handleChange = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2 style={{ color: "purple" }}>
            <label htmlFor="Add">Add a Todo</label>
            <br />
          </h2>
          <input
            style={{
              width: "100%",
              height: "30px",
              border: "1px solid black",
              borderRadius: "4px",
             
            }}
            type="text"
            id="Add"
            placeholder="Type your task here &  press enter"
            onChange={this.handleChange}
            value={this.state.check}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
