import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles(theme => (
  {
  
    wrapper:{
      display:'flex',
      height:'100%'
    }
    ,
    wrapperContent:{
      width:"100%",
      padding:10,
      transition:theme.transitions.create('margin',{
        easing:theme.transitions.easing.easeIn,
        duration:theme.transitions.duration.enteringScreen,
      })
    },
    shiftLeft:{
      marginLeft:-240,
      transition:theme.transitions.create('margin',{
        easing:theme.transitions.easing.sharp,
        duration:theme.transitions.duration.leavingScreen,
        
      })
    }
  }
))