import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { Box } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Box position="fixed" top="0" left="0" zIndex={999} width="100%" maxWidth={1600}>
        <Header/>
      </Box>
      <Hero/>
      <Services/>
    </div>
  )
}

export default Home