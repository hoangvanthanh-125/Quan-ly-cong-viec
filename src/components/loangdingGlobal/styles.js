import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  loading:{
    position:'fixed',
    top:0,
    right:0,
    left:0,
    bottom:0,
    background:'rgba(0,0,0,0.4)'
  },
  icon:{
    position:'fixed',
    width:100,
    top:'40%',
    left:0,
    right:0,
    marginLeft:'auto',
    marginRight:'auto'

  }
})