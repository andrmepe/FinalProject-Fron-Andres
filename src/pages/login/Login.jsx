import { Button, TextField} from "@mui/material"
import Grid from "@mui/material/Grid"
import axios from "axios";
import React, { useState }  from 'react';
import { useNavigate, Link} from "react-router-dom";
import Alert from '@mui/material/Alert';
import Registarse from "../registarse/Registrarse.jsx";
import Typography from "@mui/material/Typography";

const Login = ({setIsAllowed})=>{
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [ShowAlertUser, setShowAlertUser] = useState(false)
    const [showRegistrarse, setShowRegistrarse] = useState(false)
    const [showLogin, setShowLogin] = useState(true)

    const handleuser = (e)=>{
        setUser(e.target.value)
    }
    
    const handlepassword = (e)=>{
        setPassword(e.target.value)
    }

    /* console.log(user, password) */

    const registarUser = ()=>{
        setShowRegistrarse(true)
        setShowLogin(false)
    }
    const timeOutAlert =() =>{
        setTimeout(()=>{
         setShowAlert(false)   
        },2000)
    }

    const timeOutUser =()=>{
        setTimeout(()=>{
            setShowAlertUser(false)
        },2000)
    }
    const enter = ()=>{
       if(user === '' || password === ''){
        setShowAlert(true)
        timeOutAlert()
       } else {
        console.log('usuario logeado')
        axios.post('http://localhost:3001/login',{
            user: user,
            password: password
        }).then((resp)=>{
            setIsAllowed(true)
            navigate("/SolicitudesRecibidas")
        }).catch((error)=>{
            setShowAlertUser(true)
            timeOutUser()
        })
       } 
    }
    const navigate = useNavigate()

    return(
        <Grid  container width={'100%'} justifyContent='center' style={{background:'black'}}>   
            <Grid mt='40px' mb='40px' border={'1px solid black'} borderRadius={'10px'} style={{background:'white'}} >
            
            {
                showAlert && 
                <Alert severity="Error">qplease fill out all the fields</Alert>
            }
            {
                ShowAlertUser &&
                <Alert severity="warning">User does not exist</Alert>
            }
            {
                showRegistrarse &&
                <Registarse setShowLogin ={setShowLogin} setShowRegistrarse={setShowRegistrarse} 
                user={user} password={password} handleuser={handleuser} handlepassword={handlepassword}/>
            }
            {
                showLogin &&
            <Grid container width={'100%'}>    
            <Grid item mt={'10px'} ml={2}>
            <Typography  color={'black'} variant="h4">Log in</Typography>
            </Grid>
               <Grid item mt={'60px'} ml='20px' mr='20px'>
               <TextField 
               onChange={handleuser}
               id="user"
               label="user"
               variant="outlined"/>
               <TextField style={{marginLeft:'20px', marginRight:'120px'}}
               onChange={handlepassword}
               id="password"
               label="password"
               type="password"
               variant="outlined"/>
               
               <Grid mt='30px' ml="140px">
               <Button variant="outlined" style={{ border: '1px solid #1aa3ff', background:'#1aa3ff', color: "white"}} 
               onClick={()=>{enter()}}>Log in</Button>
               <Button variant="outlined"  
               onClick={()=>{registarUser()}} style={{marginLeft:'20px', border: '1px solid red', background:'red',color: "white"}}>
                Register
                </Button>
                </Grid>
                <Grid mt='20px' mb='20px' ml='140px'><Link to="/PaginaPrincipal"style={{marginLeft:'40px', fontSize:'20px', 
                textDecoration:'none', padding:'5px',borderRadius:'5px',border: '1px solid #0afdd7',background:'white',color: "#0afdd7"}}>
                main page
                </Link></Grid>
            </Grid>
            </Grid>

            }
            </Grid>
            
            
        </Grid>
    )
}

export default Login;