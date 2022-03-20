import React, { useState } from 'react'
import {Modal, Box, Button,Grid, Divider,TextField,Checkbox} from '@mui/material'

export default function ModalBook() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



  return (
      <>
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          
          <Payment/>
    </Modal>
    </>
  )
}

function Book(){
  return(
    <Box sx={style}>
      <Box sx={{textAlign:"center"}}>
        <h3>¿Que día quieres agendar tu cita?</h3>
      </Box>
      <Box>
              <Grid container>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", fontWeight:"bold"}}>LUN</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", fontWeight:"bold"}}>MAR</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", fontWeight:"bold"}}>MIE</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", fontWeight:"bold"}}>JUE</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", fontWeight:"bold"}}>VIE</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", fontWeight:"bold"}}>SAB</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", fontWeight:"bold"}}>DOM</Grid>
              </Grid>
              <Divider></Divider>
              <Grid container>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", marginTop:2, marginBotton:2}}>14 Mar.</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", marginTop:2, marginBotton:2}}>15 Mar.</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", marginTop:2, marginBotton:2}}>16 Mar.</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", marginTop:2, marginBotton:2}}>17 Mar.</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", marginTop:2, marginBotton:2}}>18 Mar.</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", marginTop:2, marginBotton:2}}>19 Mar.</Grid>
                <Grid item xs={1} sx={{marginLeft:4, textAlign:"center", marginTop:2, marginBotton:2}}>20 Mar.</Grid>
              </Grid>
        </Box>
            <Box sx={{textAlign:"center",marginTop:5, marginBottom:3}}>
            <h3>¿A qué hora?</h3>
            <span className="text">Duración 60 minutos</span>
            </Box>
            <Box sx={{marginBottom:2}}>
              <Grid container>
                <Grid item xs={4}>
                  <Grid sx={{padding:2, backgroundColor:"#FFC0C0", maxWidth:"70%", borderRadius:1, textAlign:"center", marginBottom:1}}>10:00 AM</Grid>
                  <Grid sx={{padding:2, backgroundColor:"#FFC0C0", maxWidth:"70%", borderRadius:1, textAlign:"center", marginBottom:1}}>10:00 AM</Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid sx={{padding:2, backgroundColor:"#FFC0C0", maxWidth:"70%", borderRadius:1, textAlign:"center", marginBottom:1}}>10:00 PM</Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid sx={{padding:2, backgroundColor:"#FFC0C0", maxWidth:"70%", borderRadius:1, textAlign:"center", marginBottom:1}}>10:00 PM</Grid>
                </Grid>
              </Grid>
            </Box>
            <Divider></Divider>
        <Grid container sx={{marginTop:3}}>
          <Grid item xs={6} sx={{textAlign:"left"}}>Asesoría General (Primer Servicio)</Grid>
          <Grid item xs={6} sx={{textAlign:"right", fontWeight:"bold"}}>$380.00</Grid>
          <Grid item xs={6} sx={{textAlign:"left"}}>Jaime Corona Vázquez</Grid>
          <Grid item xs={6} sx={{textAlign:"right", fontWeight:"bold"}}>Lunes 21 de Marzo a las 10:00 AM</Grid>
        </Grid>
        <Box sx={{marginTop:3, maxWidth:"150px",textAlign:"center", padding:1,marginLeft:"auto", marginRight:"auto", borderRadius:"5px", backgroundColor:"#DD4949", color:"white"}}>
          Confirmar
        </Box>
    </Box>
  )
}

function PersonalInfo(){
  const [invoice, setInvoice] = useState(false);

  const handleCkeck = (event)=>{
    setInvoice(event.target.checked);
  }
  return(
    <Box sx={style}>
      <Box sx={{textAlign:"center"}}>
        <h3>Ingresa tu información de contacto</h3>
      </Box>
      <Box>
      <TextField id="outlined-basic" sx={{width:"100%", marginTop:1}} label="Nombre Completo" variant="outlined" size="small"/>
      <TextField id="outlined-basic" sx={{width:"100%", marginTop:1}} label="Número de Celular" variant="outlined" size="small"/>
      <TextField id="outlined-basic" sx={{width:"100%", marginTop:1}} label="Correo Electrónico" variant="outlined" size="small"/>
      <Grid>
        <Checkbox onClick={handleCkeck} checked={invoice}/>
        Necesito Factura
      </Grid>
      {invoice === true && 
        <>
        <Box sx={{textAlign:"center"}}>
          <h3>Ingresa tu información fiscal</h3>
        </Box>
        <TextField id="outlined-basic" sx={{width:"100%", marginTop:1}} label="RFC" variant="outlined" size="small"/>
        <TextField id="outlined-basic" sx={{width:"50%", marginTop:1}} label="Código Postal" variant="outlined" size="small"/>
        <TextField id="outlined-basic" sx={{width:"50%", marginTop:1}} label="Estado" variant="outlined" size="small"/>
        <TextField id="outlined-basic" sx={{width:"50%", marginTop:1}} label="Ciudad" variant="outlined" size="small"/>
        <TextField id="outlined-basic" sx={{width:"50%", marginTop:1}} label="Calle" variant="outlined" size="small"/>
        <TextField id="outlined-basic" sx={{width:"50%", marginTop:1}} label="Número Exterior" variant="outlined" size="small"/>
        <TextField id="outlined-basic" sx={{width:"50%", marginTop:1}} label="Número Interior" variant="outlined" size="small"/>
        </>
      }
      </Box>
      <Box sx={{marginTop:3, maxWidth:"150px",textAlign:"center", padding:1,marginLeft:"auto", marginRight:"auto", borderRadius:"5px", backgroundColor:"#DD4949", color:"white"}}>
        Guardar
      </Box>
    </Box>
  )
}

function Payment(){
  return(
    <Box sx={style}>
      <Box sx={{textAlign:"center"}}>
        <h3>Detalles de tu cita / reservación</h3>
      </Box>
    </Box>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
