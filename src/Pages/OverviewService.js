import React from 'react'
import {Box, Grid} from '@mui/material'
import ModalBook from '../Components/UserBook/ModalBook'



export default function OverviewService() {
  return (
    <div className='container'>
      <ModalBook></ModalBook>
      <Grid container sx={{marginTop:10}}>
        <Grid item xs={6}>
          <Box sx={{textAlign:"center"}}>
            <img style={{width:"400px",objectFit:"cover",height:"400px"}} src={"https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/Every-Task-a-Customer-Service-Rep-Must-Do-header.png"}></img>
          </Box>
          <Grid container sx={{maxWidth:"400px", textAlign:"center", marginLeft:"auto", marginRight:"auto"}}>
            <Grid item xs={3}>
              <img style={{width:"90px",objectFit:"cover",height:"90px"}} src={"https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/Every-Task-a-Customer-Service-Rep-Must-Do-header.png"}></img>
            </Grid>
            <Grid item xs={3}>
              <img style={{width:"90px",objectFit:"cover",height:"90px"}} src={"https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/Every-Task-a-Customer-Service-Rep-Must-Do-header.png"}></img>
            </Grid>
            <Grid item xs={3}>
              <img style={{width:"90px",objectFit:"cover",height:"90px"}} src={"https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/Every-Task-a-Customer-Service-Rep-Must-Do-header.png"}></img>
            </Grid>
            <Grid item xs={3}>
              <img style={{width:"90px",objectFit:"cover",height:"90px"}} src={"https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/Every-Task-a-Customer-Service-Rep-Must-Do-header.png"}></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{textAlign:"center"}}>
            <Grid sx={{textAlign:"left"}}>
              <h1>Jaime Corona Vázquez</h1>
              <span className='text'>Asesor Financiero</span><br></br><br></br>
              <span className='text'>Ofrecemos asesoría financiera para personas que están buscando realizar su primera inversión en 
              criptomonedas. Tenemos 3 años de experiencia operando en este lucrativo negocio de forma privada. </span>
              <br></br><br></br>
              <span className='text' style={{fontStyle:"italic"}}>Ciudad Guzmán, Jalisco</span>
              <br></br><br></br>
              <h3>Agendar Horario</h3>
              <Box>
                <Grid container sx={{backgroundColor:"#EAEAEA", padding:1, textAlign:"center", borderRadius:"10px"}}>
                  <Grid item xs={5} sx={{paddingTop:1}}>Asesoría General (Primer Servicio)</Grid>
                  <Grid item xs={2} sx={{paddingTop:1}}>30 min</Grid>
                  <Grid item xs={2} sx={{paddingTop:1}}>MXN $380.00</Grid>
                  <Grid item xs={3}>
                    <Box sx={{maxWidth:"50%", padding:1,marginLeft:"auto", marginRight:"auto", borderRadius:"5px", backgroundColor:"#DD4949", color:"white"}}>
                      Agendar
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
