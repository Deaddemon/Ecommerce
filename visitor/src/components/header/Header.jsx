import {AppBar , Toolbar , makeStyles , Typography , Box, withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';

import  SearchBar from './SearchBar';
import HeaderButton from './HeaderButton';

//makeStyles is a function that takes javascript object and return a hook
const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height:55

    },

    logoURL: {
        width:75

    },
    subURL: {
        width:10,
        height:10,
        marginLeft: 3

    },
    sublogo:
    {
        display: 'flex',
       
    },
    logo:{
        marginLeft: '12%',
        lineHeight: 0.5,
        textDecoration: 'none',
        color: '#ffffff'
    },
    sublogo1:{
        fontSize: 11,
        fontStyle: 'italic'
    }

    
})

const ToolBar = withStyles({
    root: {
        minHeight:56
    }
})(Toolbar)


const Header = () =>{
    
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

     
    return (
        <AppBar className={classes.header}>
            <ToolBar> 
                <Link to="/" className={classes.logo}> 
                <img src={logoURL} className={classes.logoURL} alt="" ></img>
                <Box className= {classes.sublogo}>
                <Typography className={classes.sublogo1}>Explore <Box component="span" style={ {color:'#FFE500'}}>Plus</Box></Typography>
                <img src ={subURL} className={classes.subURL} alt=""></img>
                </Box>
                </Link> 
                <SearchBar/>
                <HeaderButton/>

            </ToolBar>
        </AppBar>
        
        
        )
}


export default Header;