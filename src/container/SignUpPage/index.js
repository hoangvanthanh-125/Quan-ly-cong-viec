
import { Button, Card, CardContent, Checkbox, FormControlLabel, TextField,  } from '@material-ui/core';
import React from 'react';
import { useStyles } from './style'
import { Link } from 'react-router-dom'

function SignUp(props) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
     <div className={classes.SignUp}>
     <Card>
       <CardContent>
         <div className={classes.content}>
           <h3>Đăng Kí</h3>
           <form>
            <TextField fullWidth label='Email' />
            <TextField fullWidth label='PassWord' type='password' />
            <TextField fullWidth label='Nhập lại PassWord' type='password' />
            <FormControlLabel className={classes.fullWidth}  control={<Checkbox value='agree' />} label='Tôi đã đọc chính sách và đồng ý'></FormControlLabel>
             <Button className={classes.button} variant='contained' color='primary' fullWidth>Đăng kí</Button>
            <Link to='/login'>Bạn đã có tài khoản ?</Link>
          </form>
         </div>
       </CardContent>
     </Card>
     </div>
    </div>
  );
}

export default SignUp;