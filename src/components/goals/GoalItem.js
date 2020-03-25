import { Checkbox, Typography, Chip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import goalsStyles from "./goalsStyles";
import Fade from '@material-ui/core/Fade';
import Tooltip from "@material-ui/core/Tooltip"

function GoalItem({ tags  }) {
  const classes = goalsStyles();
  const { state, dispatch } = useContext(TodosContext);
  const [editText, setEditText] = useState("");

  const [showOptions, setShowOptions] = useState(false)

  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onMouseEnter={()=>setShowOptions(true)}
      onMouseLeave={()=>setShowOptions(false)}
      
    >
     
        <div className={classes.goalItemContainer}>
          <Typography
            variant="overline"
            style={{ 
              color: "white"
            }}
          >
            {tags.title}
          </Typography>
        </div>
       
 

    </div>
     <div>test</div>
     </>
  );
}

export default GoalItem;
