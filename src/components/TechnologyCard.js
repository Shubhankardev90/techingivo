import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import AnimationWrapper from './Animation';


const TechnologyCard = ({ name, description, icon }) => {
  return (
    <AnimationWrapper>
      <Card style={{ height: '100%' }}>
        <CardContent>
          <Typography variant='h4' mb={1}>{name}</Typography>
          <Typography variant='body1'>{description}</Typography>
        </CardContent>
      </Card>
    </AnimationWrapper>
  )
}

export default TechnologyCard