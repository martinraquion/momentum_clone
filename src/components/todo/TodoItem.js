import { Checkbox, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import todoStyles from "./todoStyles";
import Fade from '@material-ui/core/Fade';
import Tooltip from "@material-ui/core/Tooltip"

function TodoItem({ todo, setMainFocus }) {
  const classes = todoStyles();
  const { state, dispatch } = useContext(TodosContext);
  const [editText, setEditText] = useState("");

  const [showOptions, setShowOptions] = useState(false)

  const handleEdit = todo => {
    dispatch({ type: "UPDATE_TODO", payload: todo, text: editText });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onMouseEnter={()=>setShowOptions(true)}
      onMouseLeave={()=>setShowOptions(false)}
      
    >
      {state.currentTodo.id === todo.id ? (
        <div className={classes.todoItemContainer}>
          <Checkbox
            checked={todo.complete}
            size="small"
            style={{ color: "#fff" }}
            onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}
          />
          <form onSubmit={() => handleEdit(todo)}>
            <TextField
              variant="outlined"
              autoFocus
              size="small"
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
                color: "#3C4148"
              }}
              onChange={e => setEditText(e.target.value)}
              onBlur={e =>
                dispatch({
                  type: "UPDATE_TODO",
                  payload: todo,
                  text: e.target.value
                })
              }
              defaultValue={state.currentTodo.text}
              InputProps={{
                inputAdornedEnd: classes.cssLabel,
                classes: {
                  root: classes.cssOutlinedInput,
                  notchedOutline: classes.notchedOutline,
                  focused: classes.focused,
                  input: classes.editCssLabel,
                  inputAdornedEnd: classes.cssLabel
                }
              }}
              InputLabelProps={{
                style: {
                  color: "white"
                },
                classes: {
                  root: classes.cssLabel,
                  focused: classes.focused
                }
              }}
            />
          </form>
        </div>
      ) : (
        <div className={classes.todoItemContainer}>
          <Checkbox
            checked={todo.complete}
            size="small"
            style={{ color: state.user.mainFocus===todo.text?"#C786E1":"white" }}
            onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}
          />
          <Typography
            onClick={() => dispatch({ type: "CURRENT_TODO", payload: todo })}
            variant="subtitle2"
            style={{ 
              textDecoration: todo.complete ? "line-through" : "none",
              color: todo.complete? "#939599":"white"
            }}
          >
            {todo.text}
          </Typography>
        </div>
      )}
      {showOptions? 
      <Fade in={showOptions} timeout={100}>
      <div className={classes.todoActions}> 
      <Tooltip title="Set as Main Focus" placement="top">
      <IconButton
          size="small"
          onClick={() => dispatch({type: "SET_MAIN_FOCUS", main_focus: todo.text})}
        >
          <CenterFocusStrongIcon style={{ fontSize: "1vw", color: state.user.mainFocus===todo.text?"#C786E1":"white" }} />
        </IconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="top">
        <IconButton
          size="small"
          onClick={() => dispatch({ type: "CURRENT_TODO", payload: todo })}
        >
          <EditIcon style={{ fontSize: "1vw", color: "white" }} />
        </IconButton>
        </Tooltip>
        <Tooltip title="Delete" placement="top">
        <IconButton
          size="small"
          onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
        >
          <DeleteIcon style={{ fontSize: "1vw", color: "white" }} />
        </IconButton>
        </Tooltip>
      </div>
      </Fade>
       :null}

    </div>
  );
}

export default TodoItem;
