import { Grid } from "@mui/material"
import { Link } from "react-router-dom";
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import Typography from '@mui/material/Typography';
import React  from 'react';
import Programmer2 from '../assets/Programmer2.png'
import Botones from "../../components/botones/Botones";
import BotonContactame from "../../components/botonContactame/BotonContactame";
import './PaginaPrincipal.css';
import primerCSS from '../assets/primerCSS.png';
import primerHTML from '../assets/primerHTML.png';
import primerJS from '../assets/primerJS.png';
import nodeJS from '../assets/nodeJS.png';
import primerMUI from '../assets/primerMUI.png';
import primerMYSQL from '../assets/primerMYSQL.png';
import primerGITHUB from '../assets/primerGITHUB.png';
import primerRstudio from '../assets/primerRstudio.png';
import primerSQL from '../assets/primerSQL.png';



const PaginaPrincipal = () => {
    return (
    <Grid container spacing={2}  alignContent={'center'} mt='5px'  style={{maxWidth:'1350px',minWidth:'350px', position:'absolute' ,background: 'black' }}>
        <Grid item xs={12}>
        <Link to="/Login"style={{marginLeft:'40px', fontSize:'20px', 
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7', background:'#0afdd7',color: "black"}}>
                Login
                </Link>
                <Botones></Botones>
                            
                <Typography variant="h3" color={"white"} mt={2} marginLeft={5} gutterBottom style={{ background: 'black' }}>
                    Andres Mejia  
                </Typography>
                <Typography variant="h3" mt={2} marginLeft={5} color="#ff0080" marginBottom='10px'> Full stack Developer - Enyoi <LaptopWindowsIcon fontSize="16px"/> </Typography>   
                <Typography variant="h4" mt='30px' marginLeft={5} color="#ff0080" >Handle the following technologies </Typography>
           </Grid>
           
           <img fontSize={'50px'} src={primerCSS} alt='primerCSS' style={{ width:'70px', background:'#ffffff',
        heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
            <img fontSize={'50px'} src={primerHTML} alt='primerHTML' style={{ width:'70px', background:'#ffffff',
        heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
            <img fontSize={'50px'} src={primerJS} alt='primerJS' style={{ width:'70px', background:'#ffffff',
         heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
              <img fontSize={'50px'} src={nodeJS} alt='nodeJS' style={{ width:'70px', background:'#ffffff',
         heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
              <img fontSize={'50px'} src={primerMUI} alt='primerMUI' style={{ width:'70px', background:'#ffffff',
         heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
              <img fontSize={'50px'} src={primerMYSQL} alt='primerMYSQL' style={{ width:'70px', background:'#ffffff',
         heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
              <img fontSize={'50px'} src={primerGITHUB} alt='primerGITHUB' style={{ width:'70px', background:'#ffffff',
         heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
              <img fontSize={'50px'} src={primerRstudio} alt='primerRstudio' style={{ width:'70px', background:'#ffffff',
         heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
              <img fontSize={'50px'} src={primerSQL} alt='primerSQL' style={{ width:'70px', background:'#ffffff',
         heigh:'30px', position:'back', marginLeft:'55px', marginTop:'60px', marginBottom:'50px'}}></img>
           
           
        <Grid mt={0.1} container marginBottom='20px'>
                    
               <Typography variant="h5" marginLeft='55px' gutterBottom style={{ background: 'black', color:'white' }}>
               For more information do not hesitate to contact me
               </Typography>
               <Grid item xs={12}/>
               <Grid ml='15px' mt='10px'><BotonContactame></BotonContactame></Grid>
                </Grid>
    </Grid>
    
    )
}

export default PaginaPrincipal