import React from 'react'
import { FormGroup, FormLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

const FormPersonalDetail = ({nextStep, prevStep, formData, setFormData}) => {
  return (
    <div>
      <Box sx={{ width:"300px", margin:"auto"}} backgroundColor="primary.blue">
        <form style={{marginTop:"50px"}}>
          <FormGroup>
            <FormLabel>First Name</FormLabel>
            <TextField
              value={formData.firstName}
              type="text"
              variant="standard"
              placeholder="Enter First Name"
              onChange={(e)=>setFormData({...formData, firstName: e.target.value})}
            />
          </FormGroup>
          <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Last Name</FormLabel>
            <TextField
              value={formData.lastName}
              type="text"
              variant="standard"
              placeholder="Enter Last Name"
              onChange={(e) =>setFormData({...formData, lastName: e.target.value})}
            />
          </FormGroup>
          <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Email</FormLabel>
            <TextField
              value={formData.email}
              type="text"
              variant="standard"
              placeholder="Enter Email"
              onChange={(e)=>setFormData({...formData, email: e.target.value})}
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
