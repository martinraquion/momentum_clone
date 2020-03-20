import React, {useEffect, useState} from 'react';
import './App.css';
import moment from "moment"
import {
   TextField,
   Container,
   Typography,
   Divider,
   IconButton,
   Fade
  } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      //   backgroundImage: `url(${LoginBG})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      background: "#444851"
    },
    html: {
      height: "100%",
      margin: 0
    }
  },
  title: {
    flexGrow: 1,
    fontFamily: "Work Sans,sans-serif",
    fontSize: "4vh",
    letterSpacing: "0.1px",
    color: "#ffffff"
  },
  welcome: {
    flexGrow: 1,
    fontFamily: "Work Sans,sans-serif",
    // fontSize:"6vh",
    color: "#fff"
  },
  subHeader: {
    flexGrow: 1,
    fontFamily: "Work Sans,sans-serif",
    fontSize: "4vh",
    // marginTop: 25,
    color: "#fff"
  },


  logo: {
    width: "8vh",
    height: "5vh",
    border: "3px solid #4bb5ab",
    // margin: "0 12px 0 8px",
    color: "#ffff"
  },

  containerWrapper: {
    background: "white",
    height: "100vh",
    opacity: 0.93
  },

  containerPadding: {
    paddingLeft: 140,
    paddingTop: 300,
    paddingRight: 140
  },

  titleSpan: {
    fontWeight: "900",
    fontFamily: "Work Sans",
    color: "#00867d"
  },

  formWrapper: {
    height: 200,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    flexDirection: "column",
    marginTop: 60
  },

  btnWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30
  },
  primaryBtn: {
    width: "49%",
    padding: 10,
    fontFamily: "Work Sans",
    fontWeight: "bold"
  },
  secondaryBtn: {
    width: "49%",
    padding: 10,
    fontFamily: "Work Sans",
    background: "white",
    color: "#546e7a",
    fontWeight: "bold"
  },

  googleBtn: {
    padding: 10,
    fontFamily: "Work Sans",
    fontWeight: "bold"
  },

  cssLabel: {
    color : 'white',
    fontSize: 40
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important ',
    
  },
  
  disabled:{
    background: "#555555 !important",
    color: '#878787 !important'
    
  }
}));

function App() {
const classes = useStyles();
const [name, setName] = useState("")
const [mainFocus, setMainFocus] = useState("")
const [lsName, setLsName] = useState("")
const [lsMainFocus, setLsMainFocus] = useState("")
const [qod, setQOD] = useState("")
const handleSetName = (e) => {
  setName(e.target.value)
}


const handleNameSubmit = (e) => {
  e.preventDefault()
  localStorage.setItem("name", name)
  setLsName(localStorage.getItem("name"))
}

const handleSetMainFocus = (e) => {
  setMainFocus(e.target.value)
}

const handleMainFocusSubmit = (e) => {
  e.preventDefault()
  localStorage.setItem("main_focus", mainFocus)
  setLsName(localStorage.getItem("main_focus"))
}


useEffect(() => {
  setLsName(localStorage.getItem("name"))
  setLsMainFocus(localStorage.getItem("main_focus"))

  // axios.get('https://quotes.rest/qod?language=en')
  // .then(function (response) {
  //   setQOD(response.data.contents.quotes[0].quote)
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

}, [name, lsName])

  return (
    <div className="App">
      <header className="App-header" style={{background: "no-repeat center url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')", backgroundSize: "cover"}}>
        <Container maxWidth="sm">
          <Fade in={true}
           {...({ timeout: 1000 })}
          >
          <h1 style={{fontSize: "6vw", margin: 0}}>{moment().format("LT")}</h1>
          </Fade>
          {lsName?
          <>
           <Fade in={true}
           {...({ timeout: 1000 })}
          >
          <h2 style={{fontSize: "5vw", margin: "10px 0px"}}>Hello, {lsName.charAt(0).toUpperCase() + lsName.slice(1).toLowerCase()}.</h2>
          </Fade>
          

          {lsMainFocus?
           <Fade in={true}
           {...({ timeout: 1500 })}
          >
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
          <h3 style={{fontSize: "2.5vw"}}>&bull;&nbsp;{lsMainFocus}</h3>
          <IconButton style={{marginLeft: 10}} onClick={()=>setLsMainFocus("")}>
            <EditIcon style={{color: "white"}}/>
          </IconButton>
          </div>
          </Fade>
          :
          <Fade in={true}
          {...({ timeout: 1500 })}
         >
          <div>
          <h3>What's your main focus today?</h3>
          <form type="submit" onSubmit={handleMainFocusSubmit}>
          <TextField
            variant="outlined"
            value={mainFocus}
            autoFocus
            fullWidth
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
          }

          </>
          :
          <div>   
          <h3>What's your name?</h3>
          <form type="submit" onSubmit={handleNameSubmit}>
          <TextField
            variant="outlined"
            value={name}
            autoFocus
            fullWidth
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
          }

        <Typography variant="overline">
          {/* {qod} */}
          "All will be alright in time"
         </Typography>

          
        </Container>
      </header>
    </div>
  );
}

export default App;
