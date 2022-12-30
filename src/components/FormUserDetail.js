import React from 'react'
import { FormGroup, FormLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

const FormUserDetail = ({nextStep, prevStep, formData, setFormData}) => {
  return (
    <div>
      <Box sx={{ width:"300px", margin:"auto"}} backgroundColor="primary.blue">
       <form style={{marginTop:"50px"}}>
          <FormGroup>
            <FormLabel>Occupation</FormLabel>
            <TextField
              value={formData.occupation}
              type="text"
              variant="standard"
              placeholder="Enter Occupation"
              onChange={(e)=>setFormData({...formData, occupation: e.target.value})}
            />
          </FormGroup>
          <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Bio</FormLabel>
            <TextField
              value={formData.bio}
              type="text"
              variant="standard"
              placeholder="Enter Bio"
              onChange={(e)=>setFormData({...formData, bio: e.target.value})}
            />
          </FormGroup>
          <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>City</FormLabel>
            <TextField
              value={formData.city}
              type="text"
              variant="standard"
              placeholder="Enter City"
              onChange={(e)=>setFormData({...formData, city: e.target.value})}
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
