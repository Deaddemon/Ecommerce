import {Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core'
import { useState } from 'react';

import { authenticateSignup ,authenticateLogin} from '../../service/api.js';

const useStyle = makeStyles({
    loginDiv:{
        height: '70vh',
        width: '90vh'
    },
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background:'#2874f0',
        width:'50%',
        backgroundPosition: 'center 80%',
        padding: '35px 30px',
        '& > *':{
            color:'#ffffff',
            fontWeight: 550

        }
    },
    login:{
        padding: '0px 30px',
        display: 'flex',
        flexDirection:'column',
        '& > *' : {
            marginTop: 10,
           

        }

    },
    text:{
        textAlign: 'center',
        color: '#878787'
     },
    
    loginBtn:{
       textTransform: 'none',
       background: '#FB641B',
       color: '#ffffff',
       height: 48,

    },
    otpBtn:{
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 48,
 
     },
    error:{
        fontSize:10,
        color: '#ff6161'
    }

})

const signUpInitialValue= {
     
    username:'',
    password: '',
    mobile: ''
}

const loginInitialvalue = {
    password: '',
    username: ''

}

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const Login =({open , setOpen , setLoginAccount})=>{

    const classes = useStyle();

    

    const[account , setAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signUpInitialValue);
    const [login , setLogin] = useState(loginInitialvalue);
    const [error , setError] = useState(false);
    const handleClose=()=>{
        setOpen(false);
        setAccount(accountInitialValues.login);
    }


    const toggleAccount = () =>{
        setAccount(accountInitialValues.signup);
    }

    const  resetAccount =() =>{
        setAccount(accountInitialValues.login);
    }
    
    const signUpUser= async ()=>{
        let response = await authenticateSignup(signup);
        if(!response){ 
            return;
        }
        handleClose();
        setLoginAccount(signup.username);
    }
    const loginUser = async ()=>{
        let response = await authenticateLogin(login);
        if(!response){ 
            setError(true);
            return;
        }
        handleClose();
        setLoginAccount(login.username);
    }
    const onInputChange= (e)=>{
        setSignup({ ...signup , [e.target.name]: e.target.value});
        
    }

    const onLoginInputChange= (e)=>{
        setLogin({ ...login , [e.target.name]: e.target.value });
        
    }

    return(

        <Dialog open={open} onClose= {handleClose}>
            <DialogContent className={classes.loginDiv}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>

                    <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>

 


                    </Box>

                    {
                        account.view === 'login' ?
                     
                    <Box className={classes.login}>

                        <TextField onChange={(e)=> onLoginInputChange(e)} name='username' label='Enter Email/Mobile number'/>
                            
                        <TextField onChange={(e)=> onLoginInputChange(e)} name='password' label='Enter Password'/>
                         

                         { error && <Typography className={classes.error}>Invalid username password</Typography>}
                        <Typography className={classes.text}>
                        By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                        </Typography>

                        <Button variant='contained' className={classes.loginBtn}  onClick={() => loginUser()} > 
                            Login

                        </Button>

                        <Typography className={classes.text}>
                            OR
                        </Typography>

                        <Button variant='contained'   className={classes.otpBtn}> 
                            Request OTP
                        </Button>

                        <Typography onClick={ ()=> toggleAccount()} className={classes.text} style = {{ color: '#2874f0' , marginTop: 'auto', cursor: 'pointer'}}>
                        New to Flipkart? Create an account
                        </Typography>

                    </Box> 
                    :

                    <Box className={classes.login}>
                    
                    <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                    <TextField onChange={(e)=> onInputChange(e)} name= 'password' label='Create Password' />
                    <TextField onChange={(e)=> onInputChange(e)} name='mobile' label='Enter Mobile number'/>
                        
                    

                    <Typography className={classes.text}>
                    By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                    </Typography>

                    <Button variant='contained' onClick={()=> signUpUser()} className={classes.loginBtn}>
                      signup

                    </Button>

 
                 

                    <Button variant='contained' onClick = {resetAccount} className={classes.otpBtn}> 
                        Existing User? Log in
                    </Button>

              
                </Box> 


                    }
                </Box>
            </DialogContent>
        </Dialog>

    )
}


export default Login;