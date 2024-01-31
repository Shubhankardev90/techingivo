import { Box, Typography } from '@mui/material'
import React from 'react'
import AnimationWrapper from './Animation'

const SectionHeading = ({ mainHeading, description }) => {
  return (
    <AnimationWrapper>
      <Box mb={1} textAlign="center">
        <Typography variant="sectionHeading" color="primary" textTransform="uppercase">
          {mainHeading}
        </Typography>
        <Typography variant="sectionDescription" color="textSecondary" textTransform="uppercase">
          {description}
        </Typography>
      </Box>
    </AnimationWrapper>
  )
}

export default SectionHeading