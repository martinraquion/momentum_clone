import React, {useState, useContext} from 'react'
import Fade from "@material-ui/core/Fade"
import TextField from "@material-ui/core/TextField"
import useStyles from "../../styles"
import BoomFitContext from "../../context"

function SetFocus() {
    const classes = useStyles()
    const {state, dispatch} = useContext(BoomFitContext)
    const [mainFocus, setMainFocus] = useState("")

    const handleMainFocusSubmit = e => {
      e.preventDefault()
      dispatch({type: "SET_MAIN_FOCUS", main_focus: mainFocus})
    }
    return (  
        <Fade in={true}
        {...({ timeout: 1500 })}
       >
        <div>
        <h3>What's your  main focus today?</h3>
        <form type="submit" onSubmit={handleMainFocusSubmit}>
        <TextField
          variant="outlined"
          onChange={e=>setMainFocus(e.target.value)}
          value={mainFocus}
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
        />
        </form>
        </div>
        </Fade>
    )
}

export default SetFocus
