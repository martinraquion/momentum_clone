import React from 'react'
import Fade from "@material-ui/core/Fade"
import IconButton from "@material-ui/core/IconButton"
import EditIcon from "@material-ui/icons/Edit"

function MainFocus({lsMainFocus, setLsMainFocus}) {
    return (
        <Fade in={true}
        {...({ timeout: 1500 })}
       >
       <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
       <h3 style={{fontSize: "2vw"}}>&bull;&nbsp;{lsMainFocus}</h3>
       <IconButton style={{marginLeft: 10}} onClick={()=>setLsMainFocus("")}>
         <EditIcon style={{color: "white", fontSize: "2vw"}}/>
       </IconButton>
       </div>
       </Fade>
    )
}

export default MainFocus
