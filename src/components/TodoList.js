import { Button, Checkbox, Divider, Fade, List, Typography } from '@material-ui/core';
import React, { useState } from 'react';

function TodoList() {
    const [todoToggle, setTodoToggle] = useState(true)
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
         <Fade in={true}
         {...({ timeout: 300 })}
        >
          <div
            style={{ 
            position: "absolute", 
            right: 40, 
            bottom: 55,
            width: "20vw",
            height: 100,
            background: "#272C34",
            borderRadius: 10
        }}
          >
            <div style={{display: "flex", padding: 8}}>
                <Typography variant="subtitle2">
                    My Tasks
                </Typography>
            </div>
            <Divider />
            <List>
                <div style={{display: "flex", alignItems: "center"}}>
                <Checkbox size="small" style={{color: "#fff"}}/>
                <Typography variant="subtitle2">
                    Initialize Todo App Design
                </Typography>
                </div>
                <Divider />

            </List>

          </div>
        </Fade>

        ) : null}
        </>
     
    );
}

export default TodoList
 