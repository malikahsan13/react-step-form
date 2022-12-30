import React from 'react'
import { FormGroup, FormLabel, TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FormUserDetail = ({nextStep, prevStep, formData}) => {
  return (
    <div>
      <Box sx={{ width:"300px", margin:"auto"}} backgroundColor="primary.blue">
       <form style={{marginTop:"130px"}}>
          <FormGroup>
            <FormLabel>Occupation</FormLabel>
            <TextField
              type="text"
              variant="standard"
              placeholder="Enter Occupation"
            />
          </FormGroup>
          <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Bio</FormLabel>
            <TextField
              type="text"
              variant="standard"
              placeholder="Enter Bio"
            />
          </FormGroup>
          <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>City</FormLabel>
            <TextField
              type="text"
              variant="standard"
              placeholder="Enter City"
            />
          </FormGroup>
          <FormGroup sx={{display:"flex", flexDirection:"row", marginTop:"15px"}}>
            <Button onClick={(curStep) => prevStep(curStep-1)} sx={{width:"120px", marginLeft:"20px"}} size="sm" variant="outlined">Previous</Button>
            <Button onClick={(curStep) => nextStep(curStep+1)} sx={{width:"120px", marginLeft:"20px"}} size="sm" variant="outlined">Next</Button>
          </FormGroup>
        </form>
      </Box>
    </div>
  )
}

export default FormUserDetail
