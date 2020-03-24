import React from 'react'
import Fade from "@material-ui/core/Fade"
import TextField from "@material-ui/core/TextField"
import useStyles from "../../styles"
function SetFocus({handleMainFocusSubmit, handleSetMainFocus, mainFocus}) {
    const classes = useStyles()
    return (
        <Fade in={true}
        {...({ timeout: 1500 })}
       >
        <div>
        <h3>What's your  main focus today?</h3>
        <form type="submit" onSubmit={handleMainFocusSubmit}>
        <TextField
          variant="outlined"
          value={mainFocus?mainFocus:localStorage.getItem("main_focus")}
          autoFocus
          style={{width: "60%"}}
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
        
          onChange={handleSetMainFocus}
        />
        </form>
        </div>
        </Fade>
    )
}

export default SetFocus
