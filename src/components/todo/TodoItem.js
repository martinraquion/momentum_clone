import React, {useContext} from 'react'
import {Checkbox, Typography, Divider} from "@material-ui/core"
import todoStyles from "./todoStyles"
import TodosContext from "./context"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@material-ui/core/IconButton"
function TodoItem({todo}) {
    const classes = todoStyles();
    const { state, dispatch } = useContext(TodosContext);
    return (
        <div style={{display: "flex",  justifyContent: "space-between", alignItems: "center"}}>
            <div className={classes.todoItemContainer}>
                <Checkbox 
                checked={todo.complete} 
                size="small" 
                style={{ color: "#fff" }}
                onChange={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo })
                }
                />
                <Typography 
                variant="subtitle2"
                style={{textDecoration: todo.complete? "line-through": "none"}}
                >
                  {todo.text}
                </Typography>
              </div>
              
              <div className={classes.todoActions}>
              <IconButton size="small">
                <EditIcon style={{fontSize: "1vw", color: "white"}}/>
              </IconButton>
              <IconButton size="small"
               onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
              >
                <DeleteIcon style={{fontSize: "1vw", color: "white"}}/>
              </IconButton>
              </div>
        </div>
    )
}

export default TodoItem
