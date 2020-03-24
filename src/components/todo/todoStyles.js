import {makeStyles} from "@material-ui/core/styles"

const todoStyles = makeStyles(theme=>({
    container:{
        position: "absolute",
        right: 40,
        bottom: 55,
        width: "20vw",
        background: "#272C34",
        borderRadius: 10,
      },
    todoItemContainer: {
        display: "flex", 
        alignItems: "center",
    },
    todoActions: {
      padding: 5
    },

    cssLabel: {
        color : 'white',
      },

      editCssLabel: {
        color : 'white',
        paddingLeft: 1,
        fontSize: 14
        
      },
      cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `${theme.palette.primary.main} !important`,
        },
      },
    
      cssFocused: {},
    
      notchedOutline: {
        borderWidth: '1px',
        borderColor: '#272C34 !important ',
        
      },
      
      disabled:{
        background: "#555555 !important",
        color: '#878787 !important'        
      }

}))

export default todoStyles