import React from 'react'
import Fade from "@material-ui/core/Fade"

function Greetings({lsName}) {
    return (
        <Fade in={true}
        {...({ timeout: 1000 })}
       >
       <h2 style={{fontSize: "3vw", margin: "10px 0px"}}>Hello, {lsName.charAt(0).toUpperCase() + lsName.slice(1).toLowerCase()}.</h2>
       </Fade>
    )
}

export default Greetings
