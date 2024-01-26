import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const TechnologyCard = ({name, description, icon}) => {
  return (
    <Card style={{height: '100%'}}>
        <CardContent>
            <Typography variant='h4' mb={1}>{name}</Typography>
            <Typography variant='body1'>{description}</Typography>
        </CardContent>
    </Card>

  )
}

export default TechnologyCard