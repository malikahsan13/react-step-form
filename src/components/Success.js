import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const Success = () => {
  return (
    <div>
        <Box sx={{ width:"300px", margin:"auto"}} backgroundColor="primary.blue">
            <Typography sx={{marginTop:"50px"}} variant='h4'>Form Submitted Successfully</Typography>
            <Link href='./' variant='button'>Main Menu</Link>
        </Box>
    </div>
  )
}

export default Success
