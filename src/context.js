import {createContext} from "react";
import uuid4 from "uuid4";

const lsName = localStorage.getItem("name")
const lsMainFocus = localStorage.getItem("main_focus")

const BoomFitContext = createContext({
  user: { 
    id: uuid4(), 
    name: lsName? lsName: "",
    mainFocus: lsMainFocus? lsMainFocus:"",
    prevMainFocus: ""
  },
  tags: [
    {id: uuid4(), tag_id: 1, title: "Trendy"},
    {id: uuid4(), tag_id: 2, title: "Shift 44"},
    {id: uuid4(), tag_id: 3, title: "Billing Portal"}
  ],
  todos: [
    { id: uuid4(), tag_id: 1, text: "send trends in email", complete: false},
    { id: uuid4(), tag_id: 2, text: "add graph in admin", complete: false },
    { id: uuid4(), tag_id: 3, text: "design interface", complete: true }
  ],
  currentTodo: {}
});

export default BoomFitContext;
