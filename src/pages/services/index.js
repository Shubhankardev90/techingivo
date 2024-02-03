import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Services from '@/components/Services'
import { Box } from '@mui/material'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
      <Box position="fixed" top="0" left="0" zIndex={999} width="100%" maxWidth={1600}>
        <Header />
      </Box>
      <Box mt={5} pt={5} px={3}>
        <Breadcrumb activeLink="Services" />
      </Box>
      <Services />

      <Footer />
    </div>
  )
}

export default ServicePage