import React from 'react'
import SectionHeading from './SectionHeading'
import { Box, Grid } from '@mui/material'
import { Web } from '@mui/icons-material';
import FeatureCard from './FeatureCard';
import {services} from '@/data/services';
const Services = () => {
  return (
    <Box py={3} px={3}>
        <SectionHeading mainHeading="Our Services" description="What we are offering ?" />
        <Grid container>
            {
                services.map(
                    (service, key)=>(
                        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}  padding={3} key={key}>
                            <FeatureCard name={service.name} icon={service.icon}  description={service.description} link={service.link} key={key} />
                        </Grid>
                    ))
            }
        </Grid>
    </Box>
  )
}

export default Services