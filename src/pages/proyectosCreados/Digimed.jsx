import React from "react";
import digi1 from '../../pages/assets/digi1.png';
import digi2 from '../../pages/assets/digi2.png';
import digi4 from '../../pages/assets/digi4.png';
import digi5 from '../../pages/assets/digi5.png';
import digi6 from '../../pages/assets/digi6.png';
import digi7 from '../../pages/assets/digi7.png';
import digi3 from '../../pages/assets/digi3.png';
import { Link } from "react-router-dom";


const LinkProyectos = ()=>{
    return(

<div style={{display:'flex', flexDirection:'column',alignItems: "center", 
textAlign: "center", maxWidth:'1350px',minWidth:'350px', background:'black'}}>
    <div style={{marginTop:'20px'}}>
    <Link style={{color:'#0afdd7'}} to="/ProyectosCreados"> Return to created projects </Link>
    </div>
    <h1 style={{color:'white'}}>DIGIMED</h1>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={digi1}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={digi2}
    alt='digimed3'
    style={{ width: '100%', height: '100%'}}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={digi3}
    alt='digimed3'
    style={{ width: '100%', height: '100%'}}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={digi4}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={digi5}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={digi6}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    <div style={{ width: '600px', height: '500px', marginBottom:'30px'}}>
    <img
    src={digi7}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    <div style={{marginBottom:'20px'}}>
    <Link style={{color:'#0afdd7'}} to="/ProyectosCreados"> Return to created projects </Link>
    </div>
</div>
    )
}

export default LinkProyectos