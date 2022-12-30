import { Button, FormGroup, FormLabel } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Confirm = ({prevStep, nextStep, formData}) => {
  return (
    <div>
      <Box sx={{ width:"300px", margin:"auto"}} backgroundColor="primary.blue">
        <form>
        <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>First Name : {formData.firstName}</FormLabel>
        </FormGroup>
        <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Last Name : {formData.lastName}</FormLabel>
        </FormGroup>
        <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Email : {formData.email}</FormLabel>
        </FormGroup>
        <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Occupation : {formData.occupation}</FormLabel>
        </FormGroup>
        <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>Bio : {formData.bio}</FormLabel>
        </FormGroup>
        <FormGroup sx={{marginTop:"15px"}}>
            <FormLabel>City : {formData.city}</FormLabel>
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

export default Confirm
