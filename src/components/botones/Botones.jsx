import { Link } from "react-router-dom";
import React from "react";
import Grid  from '@mui/material/Grid'

const Botones = ()=>{
    return(
        <Grid container >
            <Grid md={2.6} xs={8}><Link to="/InformacionPersonal"style={{marginLeft:'40px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Personal information
                </Link></Grid>
                <Grid md={2} xs={8}><Link to="/ProyectosCreados"style={{marginLeft:'15px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Projects created
                </Link></Grid>
                <Grid md={2} xs={12}><Link to="/RedesSociales"style={{marginLeft:'15px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Social networks
                </Link></Grid>
                <Grid md={2.7} xs={12}><Link to="/TecnologiasAprendidas"style={{marginLeft:'15px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Technologies learned
                </Link></Grid>
                <Grid md={2.7} xs={12}><Link to="/SolicitudesRecibidas"style={{marginLeft:'10px', fontSize:'20px', fontFamily:'arial',
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',color: "white"}}>
                Applications received
                </Link></Grid>
            
        </Grid>
    )
}

export default Botones