import React from 'react'
import TextField from "@material-ui/core/TextField"
import useStyles from "../../styles"

function SetName({ handleNameSubmit, name, handleSetName}) {
    const classes = useStyles() 
    return (
        <div>   
          <h3>What's your name?</h3>
          <form type="submit" onSubmit={handleNameSubmit}>
          <TextField
            variant="outlined"
            value={name}
            autoFocus
            style={{width:"60%"}}
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
            onChange={handleSetName}
          />
          </form>
          </div>
    )
}

export default SetName
