import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState, useContext, useReducer } from "react";
import "./App.css";
import SetFocus from "./components/forms/SetFocus";
import SetName from "./components/forms/SetName";
import Greetings from "./components/Greetings";
import LocalTime from "./components/LocalTime";
import MainFocus from "./components/MainFocus";
import TodoList from "./components/todo/TodoList";

import TodosContext from "./context"
import todosReducer from "./reducer"

function App() {
  const [name, setName] = useState("");
  const [mainFocus, setMainFocus] = useState("");
  const [lsName, setLsName] = useState("");
  const [lsMainFocus, setLsMainFocus] = useState("");
  const handleSetName = e => {
    setName(e.target.value);
  };

  const handleNameSubmit = e => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setLsName(localStorage.getItem("name"));
  };

  const handleSetMainFocus = e => {
    setMainFocus(e.target.value);
  };

  const handleMainFocusSubmit = e => {
    e.preventDefault();
    localStorage.setItem("main_focus", mainFocus);
    setLsName(localStorage.getItem("main_focus"));
  };

  useEffect(() => {
    setLsName(localStorage.getItem("name"));
    setLsMainFocus(localStorage.getItem("main_focus"));
  }, [lsName]);

  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          background:
            "no-repeat center url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          backgroundSize: "cover"
        }}
      >
        <Container maxWidth="lg">
          <LocalTime />
          {lsName ? (
            <>
              <Greetings lsName={lsName} />
              {lsMainFocus ? (
                <MainFocus
                  lsMainFocus={lsMainFocus}
                  setLsMainFocus={setLsMainFocus}
                />
              ) : (
                <SetFocus
                  mainFocus={mainFocus}
                  handleMainFocusSubmit={handleMainFocusSubmit}
                  handleSetMainFocus={handleSetMainFocus}
                />
              )}
            </>
          ) : (
            <SetName
              handleNameSubmit={handleNameSubmit}
              handleSetName={handleSetName}
              name={name}
            />
          )}

          <Typography variant="overline">
            "All will be alright in time"
          </Typography>
        </Container>
        

      <TodosContext.Provider value={{state, dispatch}}>
        <TodoList />
      </TodosContext.Provider>
      </header>
    </div>
  );
}

export default App;
