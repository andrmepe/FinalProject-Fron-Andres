import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contactanos from './pages/Contactanos/contactanos';
import InformacionPersonal from "./pages/informacionPersonal/InformacionPersonal";
import PaginaPrincipal from "./pages/paginaPrincipal/PaginaPrincipal";
import RedesSociales from "./pages/redesSociales/RedesSociales";
import ProyectosCreados from "./pages/proyectosCreados/ProyectosCreados";
import TecnologiasAprendidas from "./pages/tecnologiasAprendidas/TecnologiasAprendidas";
import SolicitudesRecibidas from "./pages/solicitudesRecibidas/SolicitudesRecibidas"
import { ProtectedRoute } from './pages/protectedRoute/Protectedroute';
import React from 'react';
import Login from "./pages/login/Login";
import { useState } from 'react';




const App = () =>{
  const [isAllowed, setIsAllowed] = useState(true)
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleName = (e)=>{
    setName(e.target.value)
}
const handleLastName = (e)=>{
    setLastName(e.target.value)
}
const handlePhone = (e)=>{
    setPhone(e.target.value)
}
const handleEmail = (e)=>{
    setEmail(e.target.value)
}
const handleMessage = (e)=>{
    setMessage(e.target.value)
}
  /* console.log(isAllowed) */

    return(
      <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to={'/PaginaPrincipal'}/>}></Route>
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/solicitudesRecibidas" element = {<SolicitudesRecibidas/>}></Route>
                
      </Route>

        <Route path="/login" element = {<Login setIsAllowed={setIsAllowed}/>}></Route>
        <Route path="/contactanos" element = {<Contactanos 
        name={name} 
        setName={setLastName} 
        lastName={lastName} 
        setLastName={setLastName} 
        phone={phone} 
        setPhone={setPhone} 
        email={email} 
        setEmail={setEmail} 
        message={message} 
        setMessage={setMessage} 
        handleName={handleName} 
        handleLastName={handleLastName} 
        handleEmail={handleEmail} 
        handlePhone={handlePhone} 
        handleMessage={handleMessage}/>}></Route>
        <Route path="/informacionPersonal" element = {<InformacionPersonal/>}></Route>
        <Route path="/paginaPrincipal" element = {<PaginaPrincipal/>}></Route>
        <Route path="/redesSociales" element = {<RedesSociales/>}></Route>
        <Route path="/proyectosCreados" element = {<ProyectosCreados/>}></Route>
        <Route path="/tecnologiasAprendidas" element = {<TecnologiasAprendidas/>}></Route>
        <Route path="/solicitudesRecibidas" element = {<SolicitudesRecibidas />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

