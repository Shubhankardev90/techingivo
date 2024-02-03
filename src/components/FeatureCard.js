import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import InViewAnimation from './InViewAnimation'

const FeatureCard = ({ name, icon, description, link }) => {

  return (
    <InViewAnimation>
      <Card variant='elevation'>
        <CardMedia
          sx={{ height: 140 }}
          image="/feature_card.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography variant='h4' display="flex" alignItems="center" columnGap={2} mb={2}>{name}</Typography>
          <Typography variant='body'>{description}</Typography>
          <Box textAlign="right">
            <Button><Link href={link}>Learn More</Link></Button>
          </Box>
        </CardContent>
      </Card>
    </InViewAnimation>
  )
}

export default FeatureCard