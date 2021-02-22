import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: '80%',
    height:'55%',
    backgroundColor: 'white',
    outline:'none',
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
  //  boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
    
  },
  header:{
    display:'flex',
    justifyContent:'space-between',
    background:'red',
    padding:9
  },
  content:{
    padding:15

  },
  icon:{
  cursor:'pointer',
  fontSize:'large'
  },
  title:{
    fontWeight:700
  }
}));

