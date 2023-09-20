import React from "react";
import digimed3 from '../../pages/assets/digimed3.png';
import food1 from '../../pages/assets/food1.png';
import Markeplace from '../../pages/assets/Markeplace.png';
import PortafolioPrueba from '../../pages/assets/PortafolioPrueba.png';
import { Link } from "react-router-dom";


const LinkProyectos = ()=>{
    return(
<div>
<div style={{display:'flex', flexDirection:'column',alignItems: "center", textAlign: "center", marginBottom:'30px'}}>
    <div style={{ width: '600px', height: '500px'}}>
    <img
    src={digimed3}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
    
        <p style={{ color: 'white', maxWidth: '600px' }}>project created with the goal of creating a platform that offers a transformative way of managing 
            medical prescriptions. This project aimed to increase the efficiency and precision in the generation 
            of prescriptions issued by medical professionals. With this platform, the patient will be able to 
            have their medical prescription in PDF for quick printing. <Link style={{color:'#0afdd7'}} to="/digimedproject"> see more... </Link> </p>
            
</div>
<div style={{display:'flex', flexDirection:'column',alignItems: "center", textAlign: "center", marginBottom:'30px'}}>
    <div style={{ width: '600px', height: '400px'}}>
    <img
    src={food1}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
        <p style={{ color: 'white', maxWidth: '600px' }}>
            Project created to give customers the opportunity to try Colombian food and be able to order 
            online or view the available menu. <Link style={{color:'#0afdd7'}} to="/foodproject"> see more... </Link></p>
    </div>
    <div style={{display:'flex', flexDirection:'column',alignItems: "center", textAlign: "center", marginBottom:'30px'}}>
    <div style={{ width: '600px', height: '400px'}}>
    <img
    src={Markeplace}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
        <p style={{ color: 'white', maxWidth: '600px' }}>
        Creation of a marketeplace where the user can make a filter according to what they 
        want to search for to buy online.</p>
    </div>
    <div style={{display:'flex', flexDirection:'column',alignItems: "center", textAlign: "center", marginBottom:'30px'}}>
    <div style={{ width: '600px', height: '400px'}}>
    <img
    src={PortafolioPrueba}
    alt='digimed3'
    style={{ width: '100%', height: '100%' }}
    />
    </div>
        <p style={{ color: 'white', maxWidth: '600px' }}>
        First portfolio created, I called it a test portfolio because I was rehearsing 
        the creation of my portfolio.</p>
    </div>

</div>
    )
}

export default LinkProyectos