import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';

import { bannerData } from '../../constants/data';




const useStyle = makeStyles({
    image:{
        width:'100%'
    }

})

const Banner= ()=> {
    const classes= useStyle();

    return (

        <Carousel

        autoPlay= {true}
        animation='slide'
        cycleNavigation={true}
        indicators= {false} 
        navButtonsAlwaysVisible= {true}
        navButtonsProps={
            {
                style:{
                    background:' #ffffff',
                    borderRadius: 0,
                    height:'40%',
                    color: '#494949'
                     
                }
            }
        }
        >
            {
                bannerData.map( (item) => 
                <img src={item} className={classes.image} alt=""/> 
                )
            }
        </Carousel>

    )
}

export default Banner;