import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import React, { useEffect, useState } from "react";
import TableRow from "@mui/material/TableRow";
import { Button, Grid, Typography, TextField } from "@mui/material";
import axios from "axios";
import Box from '@mui/material/Box';

const SolicitudesRecibidas = () => {
  /* console.log(name, lastName, phone, email, message) */
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
    const [data, setData] = useState([])

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

    const Url = 'http://localhost:3001/contactanos'
    const getData = async ()=>{
        try {
            const {data:respond} = await axios.get(Url)
            setData(respond)
        }
        catch(error){
            console.log('error')
        }
    }
    useEffect(()=>{
        getData()
    },[])
    /* console.log(data) */

    const edit =((obj)=>{
      setId(obj.idcontactame)
      setName(obj.name)
      setLastName(obj.lastName)
      setPhone(obj.phone)
      setEmail(obj.email)
      setMessage(obj.message)

    console.log(obj)
    })
   /*  const update =()=>{
      axios.put(`http://localhost:3001/contactanos/editRequest/${id}`)
    } */
    console.log(name, lastName, phone, email, message)
    return(
    <Grid container justifyContent='center' width='100%' style={{ background: 'white'}}>
        <Grid item ml='20px'>
            <Typography variant="h5">Solicitudes</Typography>
        </Grid>
        <Grid item>
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:'#0afdd7'}} align="left">id</TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left">Name</TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left">Last name</TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left">Phone</TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left">E-mail</TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left">Messag</TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left">Edit</TableCell>
            <TableCell style={{color:'#0afdd7'}} align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row)=>(
               <TableRow key={row.idcontactame} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell >{row.idcontactame}</TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.lastName}</TableCell>
                <TableCell >{row.phone}</TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.message}</TableCell>
                <TableCell ><Button  onClick={()=>{edit(row)}}>Edit</Button></TableCell>
                <TableCell ><Button>Delete</Button></TableCell>
               </TableRow> 
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>

          <Grid container>
          <Grid item>
          <Box
            component="form"
            
            noValidate
            autoComplete="off"
           > 
            <Grid sx={{mt:12, }} container justifyContent="center">               
                <Grid item xs={4}>
                  <TextField id="outlined-basic" label="name" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                <TextField id="outlined-basic" label="lastName" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                  <TextField id="outlined-basic" label="phone" variant="outlined" />
                </Grid>
                <Grid item sx={{mt:3, }} xs={4}>
                  <TextField id="outlined-basic" label="email" variant="outlined" />
                </Grid>
                <Grid item sx={{mt:3, }} xs={4}>
                  <TextField id="outlined-basic" label="message" variant="outlined" />
                </Grid>
              </Grid>
              <Grid container sx={{mt:8, }} justifyContent="center">
              <Grid item xs={4}>
                <Button variant="outlined" color="success" onClick={()=>{update(idcontactame)}}>Guardar</Button>
                <Button variant="outlined" color="error" onClick={()=>{cancelar()}}>Cancelar</Button>
                </Grid>
              </Grid>
          </Box>
          </Grid>  
          </Grid>
          
   {/*  <form >
                    <FormControl>
                       <FormLabel style={{color:'white', fontSize:'20px'}}>Name</FormLabel>
                       <TextField id="outlined-basic" label="name" value={name} variant="filled" size="normal" onChange={handleName}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Last Name</FormLabel>
                       <TextField id="outlined-basic" label="lastName" value={lastName} variant="filled" size="normal" onChange={handleLastName} />
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>Phone</FormLabel>
                       <TextField id="outlined-basic" label="phone" value={phone} variant="filled" size="normal"  onChange={handlePhone}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>E-mail</FormLabel>
                       <TextField id="outlined-basic" label="email" value={email} variant="filled" size="normal"  onChange={handleEmail}/>
                       <FormLabel  style={{color:'white', fontSize:'20px'}}>message</FormLabel>
                       <TextField id="outlined-basic" label="message" value={message}  variant="soft" style={{ width:300, height:90}}  onChange={handleMessage}/>
                       </FormControl><br />
                    <Grid item mt={2}>
                       <Button variant="outlined" color="success" >Guardar</Button>
                       <Button variant="outlined" color="error" >Cancelar</Button>
                    </Grid>
                     
                 </form> */}
        </Grid>
    </Grid>
    )
}

export default SolicitudesRecibidas