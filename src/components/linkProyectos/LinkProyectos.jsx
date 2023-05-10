import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import React from "react";
/* import imgRouter from '../../pages/assets/imgRouter.png' */

const LinkProyectos = ()=>{
    return(
<Grid container spacing={2} ml='150px' >
                <Grid xs={6}>
                {/* <img fontSize={'50px'} src={imgRouter} alt='imgRouter' style={{ width:'70px', background:'#ffffff',
        heigh:'30px', position:'back', marginLeft:'55px',borderRadius:'20px',marginTop:'60px', marginBottom:'50px'}}></img> */}
                <Grid><NavLink to='https://github.com/andrmepe/portafolioFinalAndres' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/portafolioFinalAndres </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/portafolioFinalBack' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/portafolioFinalBack </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/markeplaceFrontEnd' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/markeplaceFrontEnd </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/markeplaceBackend' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/markeplaceBackend </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/peliculas-back' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/peliculas-back </NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/challenge-react-router-front' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/challenge-react-router-front </NavLink></Grid>
                </Grid>
                <Grid xs={6}>
                <Grid><NavLink to='https://github.com/andrmepe/fron-vehiculos' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/fron-vehiculos</NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/backendVehiculos' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/backendVehiculos</NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/Primer-commit-FronUser' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/Primer-commit-FronUser</NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/portafolio2' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/portafolio2</NavLink></Grid>
                <Grid><NavLink to='https://github.com/andrmepe/portafolio' style={{fontSize:'15px'}} target='_blank' 
                rel=' noopener noreferrer'>https://github.com/andrmepe/portafolio</NavLink></Grid>
                </Grid>
                </Grid>
    )
}

export default LinkProyectos