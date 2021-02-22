import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  
  drawerPaper: {
    width: 240,
    zIndex:10,
    height:'100vh',
    position:'relative'
  },
  menuItem:{
    textDecoration:'none',
  },
  menulink:{
    textDecoration:'none',
    listStyle:'none',
    color:"black",
    
  },
  active:
  {
   '&>div':{ background:'rgba(0,0,0,0.4)'}
  }
  
 
}));
