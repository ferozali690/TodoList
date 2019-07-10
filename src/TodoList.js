import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  const lists = todos.length ? (
    todos.map(item => {
      return (
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            width: "70%",
            listStyleType: "none",
            margin:'0 auto',
            borderRadius:'5px'
            
            
          }}
        >
          <h2>
            <li>
              {item.task}
              <button
                onClick={() => {
                  deleteTodo(item.id);
                }}
                style={{
                  height: "27px",
                  borderRadius: "20%",
                  backgroundColor: "red",
                  border: "none",
                  outline: "none",
                  float: "right",
                  color:'white'
                  
                }}
              >
                X
              </button>
            </li>
          </h2>
        </div>
      );
    })
  ) : (
    <div>
      <h1 style={{ color: "lightblack" }}>Empty todos</h1>
    </div>
  );
  return <p>{lists}</p>;
};

export default TodoList;
