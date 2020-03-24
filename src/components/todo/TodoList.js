import React, { useState, useContext, useReducer} from "react";
import {
  Button,
  Divider,
  Fade,
  List,
  Typography
} from "@material-ui/core";
import todoStyles from "./todoStyles"
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm" 
import TodosContext from "./context"

function TodoList(props) {
  const classes = todoStyles();
  const [todoToggle, setTodoToggle] = useState(true);
  const { state, dispatch } = useContext(TodosContext);
  return (
    <>
      <div style={{ position: "absolute", right: 40, bottom: 15 }}>
        <Button onClick={() => setTodoToggle(!todoToggle)}>
          <Typography variant="overline" style={{ color: "#fff" }}>
            My Tasks
          </Typography>
        </Button>
      </div>
      {todoToggle ? (
        <Fade in={true} {...{ timeout: 300 }}>
          <div className={classes.container}>
            <div style={{ display: "flex", padding: 10 }}>
              <Typography variant="subtitle2">MY TASKS</Typography>
            </div>
            <Divider />
            <List style={{
                maxHeight:"60vh",
                overflowY: "auto",
            }}>
            {state.todos.length?
              state.todos.map(todo=>(
                <>
                <TodoItem 
                  todo={todo}
                />
                </>
              ))
              :null
            }
            </List>
            <TodoForm />
          </div>
        </Fade>
      ) : null}
    </>
  );
}

export default TodoList;
