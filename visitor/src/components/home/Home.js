import {Box, makeStyles } from '@material-ui/core';

import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getProducts as listProducts}  from '../../redux/actions/productActions.js'

import Banner from './Banner';
import ColumnBanner from './columnBanner';
import Navbar from './Navbar';
import Slide  from  './Slide';
 


const useStyle = makeStyles({
    banner:{
        padding:10,
        background: '#F2F2F2'
    }

})

const Home = ()=>{
    const classes = useStyle();

    const {products} = useSelector(state => state.getProducts);
    
    const dispatch =  useDispatch();
    useEffect(()=>{
        dispatch(listProducts());

    },[dispatch])

    return (

        <div> 
        <Navbar />
        <Box className={classes.banner}> 
        <Banner />
        
         <Slide products={products}/> 
        <ColumnBanner/>
        <Slide products={products}/> 
        </Box>
         
        </div>

    )
}


export default Home;