import { Button, Card, CardContent, TextField, } from '@material-ui/core';
import React from 'react';
import { useStyles } from './style'
import { Link } from 'react-router-dom'

function Login(props) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
     <div className={classes.login}>
     <Card>
       <CardContent>
         <div className={classes.content}>
           <h3>Đăng nhập</h3>
           <form>
            <TextField fullWidth label='Email' />
            <TextField fullWidth label='PassWord' type='password' />
             <Button className={classes.button} variant='contained' color='primary' fullWidth>Đăng nhập</Button>
            <Link to='/signup'>Bạn chưa có tài khoản ?</Link>
          </form>
         </div>
       </CardContent>
     </Card>
     </div>
    </div>
  );
}

export default Login;