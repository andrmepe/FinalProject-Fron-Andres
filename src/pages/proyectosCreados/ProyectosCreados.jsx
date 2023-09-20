import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import React from 'react';
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
            </Grid>
      </Grid>
    )
}

export default ProyectosCreados