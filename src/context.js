import React from "react";
import uuid4 from "uuid4"

const TodosContext = React.createContext({
  todos: [
    { id: uuid4(), text: "Eat Breakfast", complete: false },
    { id: uuid4(), text: "Code Something", complete: false },
    { id: uuid4(), text: "Sleep Early", complete: true }
  ],
  currentTodo: {}
});

export default TodosContext;