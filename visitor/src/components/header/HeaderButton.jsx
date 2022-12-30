import {Box, Button, Typography, Badge} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {ShoppingCart, KeyboardArrowDown} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { useState , useContext } from 'react'


import LoginDialog from '../login/Login'; 
import {LoginContext} from '../../context/ContextProvider'
import {Profile} from '../header/Profile'

const useStyle = makeStyles({
    loginButton: {
        background: '#ffffff',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 550,
        padding: '5px 80px',
        boxShadow: 'none'
    },
    headerBox:{
        margin : '0 5%',
        display:'flex',
        '& > *':{
            marginRight: '10%',
            alignItems : 'center'
        }
    }
    ,
    headerBoxCart:
    {
        display: 'flex',
        color:'#ffffff',
        textDecoration: 'none'
         
    }
})
const HeaderButton = ()=>{
    const classes = useStyle();

    const[open  , setOpen] = useState(false);

    const { loginAccount , setLoginAccount } = useContext( LoginContext);

    const openDialogLogin= ()=>{
        setOpen(true);
    }
 

    return(
        <Box className={classes.headerBox}>
            {
                loginAccount ? 
                <Profile loginAccount={loginAccount} setLoginAccount={setLoginAccount}/>
                :
                <Link to="/">
                <Button variant="contained" className={classes.loginButton} onClick={ ()=> openDialogLogin()}>Login</Button>
                </Link>

            }
             
            <Typography style={{marginTop: 4 , display:'flex'}}>more<KeyboardArrowDown/></Typography>
             
            <Link to="/cart" className={classes.headerBoxCart}> 
            <Badge badgeContent={4} color="primary">
            <ShoppingCart/>
            </Badge>
            <Typography style={
                {marginLeft: 10}
            }>  Cart</Typography>
            </Link>
             <LoginDialog open={open} setOpen={setOpen} setLoginAccount={setLoginAccount}/>
        </Box>

    )
}




export default HeaderButton;