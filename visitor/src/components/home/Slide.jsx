import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Box, Typography  } from "@material-ui/core";

import {Link } from 'react-router-dom'
//import {products} from '../../constants/data.js';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const useStyle = makeStyles({
    component:{
        marginTop:'1%',
         
        display:'flex'
         
        

    },
    component3:{
      
        marginLeft: '2%',
        width: '100%'
         
        

    },
    images:{
        height: '150px',
        
        

    },
    imagesBox:{
        padding: 20,
        textAlign: 'center'
    }
})

const Slide = ( {products}) =>{
// const Slide = ()=>{
    const classes = useStyle();
    return(

        <Box className={classes.component}> 
  
       <Box style={{ width:'85%',background: '#ffffff',}}> 
        <Carousel
                swipeable={false}
                 draggable={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
               
                 keyBoardControl={true}
                 customTransition="all .5"
                 transitionDuration={500}
                 containerClass="carousel-container"
                 removeArrowOnDeviceType={["tablet", "mobile"]}
                 centerMode={true}
                 dotListClass="custom-dot-list-style"
                 itemClass="carousel-item-padding-40-px"
                >

                    {
                        products.map(product => (
                          <Link to= {`product/${product.id}`}>  
                            <Box className={classes.imagesBox}> 
                            <img className={classes.images} src = {product.url} alt=""  />
                            <Typography style={{marginTop:'15%' , fontWeight:600}}>{product.title.shortTitle}</Typography>
                            <Typography style={{color: '#028910'}}>{product.discount}</Typography>
                            <Typography  style={{opacity:'30%'}}>{product.tagline}</Typography>
                            </Box>
                            </Link>
                        ))
                    } 
               
         </Carousel>
         </Box>
           <Box  >
             <img className={classes.component3} src="https://rukminim1.flixcart.com/flap/464/708/image/e1d2b2e249be01b5.jpeg?q=70" alt=""/>
         </Box> 
          
         </Box>
    )
}


export default Slide;

// ///* <Box className={classes.component3}>
// <img className={classes.component3} src="https://rukminim1.flixcart.com/flap/464/708/image/e1d2b2e249be01b5.jpeg?q=70" alt=""/>
// </Box> */

  