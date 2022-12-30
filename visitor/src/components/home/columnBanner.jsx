import {Box, makeStyles} from "@material-ui/core"



import { columnBannerData } from "../../constants/data.js"



const useStyle= makeStyles({
    image:{
        width:'33.3%',
        imageRendering: 'auto',
//   imageRendering: 'crisp-edges',
//   imageRendering: 'pixelated'
    }
})


const ColumnBanner = ()=>{
    const classes=  useStyle();
    return (
        <Box>
           { 
             columnBannerData.map((item)=> 

             <img src={ item } alt="" className={classes.image}/> 
              
             )
             
            }

        </Box>
    )

}

export default ColumnBanner;