import React from "react";
import uuid4 from "uuid4";

const BoomFitContext = React.createContext({
  user: { id: "", name: "", mainFocus: "" },
  todos: [
    { id: uuid4(), text: "Eat Breakfast", complete: false },
    { id: uuid4(), text: "Code Something", complete: false },
    { id: uuid4(), text: "Sleep Early", complete: true }
  ],
  currentTodo: {}
});

export default BoomFitContext;
