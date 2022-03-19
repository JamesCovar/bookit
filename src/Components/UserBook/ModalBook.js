import React from 'react'
import {Modal, Box, Button,Grid, Divider} from '@mui/material'

export default function ModalBook() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
      <>
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
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
            <Box>
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
        </Box>
    </Modal>
    </>
  )
}


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
