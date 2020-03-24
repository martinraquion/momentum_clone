import React, {createContext} from "react";
import uuid4 from "uuid4";

const lsName = localStorage.getItem("name")
const lsMainFocus = localStorage.getItem("main_focus")

const BoomFitContext = createContext({
  user: { 
    id: uuid4(), 
    name: lsName? lsName: "",
    mainFocus: lsMainFocus? lsMainFocus:"",

  },
  todos: [
    { id: uuid4(), text: "Eat Breakfast", complete: false },
    { id: uuid4(), text: "Code Something", complete: false },
    { id: uuid4(), text: "Sleep Early", complete: true }
  ],
  currentTodo: {}
});

export default BoomFitContext;
