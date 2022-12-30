import { navData } from "../../constants/data";
import { Box, Typography, makeStyles  } from '@material-ui/core';
 


const useStyle =  makeStyles({
    components: {
        display: 'flex',
        marginTop :'60px',
        marginLeft:'5%',
        marginRight: '5%',
        justifyContent:'space-between'
    },
    container:{
        textAlign: 'center',
        padding: '12px 8px ',
        lineHeight:2
        
    } ,
    image:{
        width:60,
        

    },
    text:{
        fontWeight:550,
        fontSize:13
    }

})

const Navbar = () => {
    const classes= useStyle();
    return (

        <Box className={classes.components }>
            {
                navData.map(
                    data=> (
                        <Box className={classes.container}>
                             
                            <img style={
                                { borderRadius: '50%',  
                                border: '0px solid #000000',
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
                              }}  
                                className={classes.image}  
                                src= {data.url} alt="" />  
                             <Typography className={classes.text}>{data.text}</Typography> 

                        </Box>
                    )
                )
            }
              
        </Box>

    )
}

export default Navbar;