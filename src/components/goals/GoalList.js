import { Button, Divider, Fade, List, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import goalsStyles from "./goalsStyles";
import GoalItem from "./GoalItem"
function GoalList() {
  const classes = goalsStyles();
  const [goalsToggle, setGoalsToggle] = useState(true);
  const { state } = useContext(TodosContext);
  return (
    <>
      <div style={{ position: "absolute", left: 30, top: 15 }}>
        <Button onClick={() => setGoalsToggle(!goalsToggle)}>
          <Typography variant="overline" style={{ color: "#fff" }}>
            Goals
          </Typography>
        </Button>
      </div>
      {goalsToggle ? (
        <Fade in={true} {...{ timeout: 300 }}>
          <div className={classes.container}>
          <div style={{ display: "flex", padding: 10 }}>
              <Typography variant="subtitle1">TODAY</Typography>
            </div>
            <Divider />
            <List style={{
                maxHeight:"60vh",
                overflowY: "auto",
                padding: 0
            }}>
            {state.tags.length?
              state.tags.map(tags=>(
                <>
                   <GoalItem tags={tags}/>
                </>
              ))
              :null
            }
            </List>
            <Divider />
            {/* <TodoForm /> */}
          </div>
        </Fade>
      ) : null}
    </>
  );
}

export default GoalList;
