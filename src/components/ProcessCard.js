import { Circle } from '@mui/icons-material'
import { Box, Card, CardContent, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import React from 'react'

const ProcessCard = ({index, title, description}) => {
  return (
    <Card variant='outlined' style={{height:"100%"}}>
        <CardContent>
            <Box display="flex" columnGap={1} alignItems="center">
                <Typography variant="h1" color="primary">{index}</Typography>
                <Typography variant='h3'>{title}</Typography>
            </Box>
            <ul style={{listStyleType:'circle', marginLeft:"1rem"}}>
            {
                description.map((_description, key)=>(
                    <li key={key}>
                        <Typography variant="body1">
                            {_description}
                        </Typography>
                    </li>
                ))
            }
            </ul>
        </CardContent>
    </Card>
  )
}

export default ProcessCard