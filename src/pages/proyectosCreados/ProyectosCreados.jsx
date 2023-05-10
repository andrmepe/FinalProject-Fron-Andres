import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import React from 'react';
import Web1 from '../assets/Web1.png';
import Web2 from '../assets/Web2.png';
import Web3 from '../assets/Web3.png';
import { NavLink } from 'react-router-dom';
import Botones from '../../components/botones/Botones';
import BotonContactame from '../../components/botonContactame/BotonContactame.jsx';
import BotonPage from '../../components/botonPage/BotonPage';
import LinkProyectos from '../../components/linkProyectos/LinkProyectos';
/* import './ProyectosCreados.css' */

const ProyectosCreados = () => {
    return (
        <Grid container spacing={2} className='grid-container' style={{maxWidth:'1350px',minWidth:'350px', background:'black'}}>
            <Grid xs={12}>
            
            <Grid mt='20px' ml='100px'><Botones></Botones></Grid>
              <Typography fontSize={'35px'} mt='60px' ml='500px' mb='30px' color={'white'} variant="h5" gutterBottom>
                 Projects Created</Typography>
                <LinkProyectos></LinkProyectos>    
            <Grid xs={12} mt='40px' ml='460px'>
                <Typography color={'white'} variant="h5" gutterBottom>
                A whole world in your hands <KeyboardIcon/>
                </Typography> 
            <Grid  container spacing={2} >
            <Grid xs={12} mb='20px' mt='20px' ml='50px'>             
               <BotonPage></BotonPage>
               <BotonContactame></BotonContactame>
             </Grid>
             </Grid>   
            </Grid>
             <img  src={Web1} alt='Web1' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'back', marginLeft:'120px', marginTop:'20px', opacity: .4}}></img>
        <img  src={Web2} alt='Web2' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'back', marginLeft:'120px', marginTop:'20px', opacity: .4}}></img>
        <img  src={Web3} alt='Web3' style={{background:'#ffffff', borderRadius:'30px', width:'200px', 
        heigh:'100px', position:'back', marginLeft:'120px', marginTop:'20px', opacity: .4}}></img>
            </Grid>
      </Grid>
    )
}

export default ProyectosCreados