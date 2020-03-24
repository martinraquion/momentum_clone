import React, {useContext, useState} from 'react'
import TextField from "@material-ui/core/TextField"
import todoStyles from "./todoStyles"
import TodosContext from "./context"
import AddIcon from "@material-ui/icons/Add"

function TodoForm() {
    const { dispatch } = useContext(TodosContext);
    const [todo, setTodo] = useState("");
    const classes = todoStyles();

    const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: "ADD_TODO", payload: todo });
      setTodo("");
    };

    return (
        <form onSubmit={handleSubmit}> 
        <div style={{display: "flex", padding: 5}}>
           <TextField
            variant="outlined"
            autoFocus
            size="small"
            style={{width:"80%"}}
            onChange={e=>setTodo(e.target.value)}
            value={todo}
            placeholder="New Todo"
            InputProps={{
              inputAdornedEnd: classes.cssLabel,
              classes: {
                root: classes.cssOutlinedInput,
                notchedOutline: classes.notchedOutline,
                focused: classes.focused,
                input: classes.cssLabel,
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

        </div>
        </form> 

    )
}

export default TodoForm
