import { Checkbox, Typography, Chip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext, useState } from "react";
import TodosContext from "../../context";
import goalsStyles from "./goalsStyles";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Collapse from '@material-ui/core/Collapse';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

function GoalItem({ tags }) {
  const classes = goalsStyles();
  const { state, dispatch } = useContext(TodosContext);
  const [editText, setEditText] = useState("");

  const [showOptions, setShowOptions] = useState(false);
  const [showTodo, setShowTodo] = useState(true)

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <div
          className={classes.goalItemContainer}
          style={{
            background: "rgb(55, 62, 73, 0.6)"
          }}
        >
          <IconButton size="small" color="secondary" onClick={()=>setShowTodo(!showTodo)}>
            {showTodo? <ExpandMoreIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography
            variant="overline"
            style={{
              color: "white",
              fontWeight: "800"
            }}
          >
            {tags.title} (
            {state.todos.filter(todo => tags.tag_id === todo.tag_id).length})
          </Typography>
        </div>
      </div>
      <Collapse in={showTodo} transition="auto">
      {
      showTodo?
      state.todos.map(todo =>
        todo.tag_id === tags.tag_id ? (
         
          <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 0px"
            }}
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
          >
         
            <div className={classes.goalItemContainer}>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "white",
                    paddingLeft: 10,
                    display: "flex",
                    alignItems: "center",
                    textDecoration: todo.complete? "line-through":"none"
                  }}
                >
                  {todo.complete?
                  <CheckCircleIcon color="secondary" style={{fontSize: 15, marginRight: 5}}/>
                  : <RadioButtonCheckedIcon color="default" style={{fontSize: 15, marginRight: 5}}/>
                  }
                 
                {todo.text}
                </Typography>
            </div>
         
          </div>
          <Divider/>
          </div>
        
        ) : null
      )
      :null
    }
  </Collapse>
    </>
  );
}

export default GoalItem;
