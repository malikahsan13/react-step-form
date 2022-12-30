import React from 'react'
import { FormGroup, FormLabel, TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FormPersonalDetail = ({nextStep, prevStep, formData}) => {
  return (
    <div>
      <Box sx={{ width:"300px", margin:"auto"}} backgroundColor="primary.blue">
        <form style={{marginTop:"130px"}}>
          <FormGroup>
            <FormLabel>First Name</FormLabel>
            <TextField
              type="text"
              variant="standard"
              placeholder="Enter First Name"
            />
          </FormGroup>
          <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Last Name</FormLabel>
            <TextField
              type="text"
              variant="standard"
              placeholder="Enter Last Name"
            />
          </FormGroup>
          <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Email</FormLabel>
            <TextField
              type="text"
              variant="standard"
              placeholder="Enter Email"
            />
          </FormGroup>
          <FormGroup sx={{display:"flex", flexDirection:"row", marginTop:"15px"}}>
            <Button onClick={(curStep)=> prevStep(curStep-1)} sx={{width:"120px", marginLeft:"20px"}} size="sm" variant="outlined">Previous</Button>
            <Button onClick={(curStep) => nextStep(curStep+1)} sx={{width:"120px", marginLeft:"20px"}} size="sm" variant="outlined">Next</Button>
          </FormGroup>
        </form>
      </Box>
    </div>
  )
}

export default FormPersonalDetail
