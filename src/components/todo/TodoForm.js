import React from 'react'
import TextField from "@material-ui/core/TextField"
import todoStyles from "./todoStyles"
function TodoForm() {
    const classes = todoStyles();
    return (
        <div style={{display: "flex", padding: 5}}>
           <TextField
            variant="outlined"
            autoFocus
            size="small"
            style={{width:"80%"}}
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
    )
}

export default TodoForm
