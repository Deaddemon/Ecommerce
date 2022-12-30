import { Typography , MenuItem , Menu, Button , makeStyles } from "@material-ui/core"
import { useState  } from "react";



const useStyle = makeStyles({
    root:{
        marginTop: 40,
        
    }
})
export const Profile= ({ loginAccount , setLoginAccount})=>{
    const [anchorEl, setAnchorEl] =  useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
       
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout= ()=>{
      setLoginAccount('');
    }


     
    const classes = useStyle();
    return (
       
        <>
         <Button 
        onClick={handleClick}
      >
       <Typography style={{ marginTop:4 , color:'#ffffff'}}>{loginAccount}</Typography>
      </Button>
        
        <Menu
        className={classes.root}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        
        <MenuItem onClick={ ()=> {handleClose(); logout();}}>Logout</MenuItem>
      </Menu>
        </>
    )
}