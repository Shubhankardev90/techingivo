import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroStyles from '@/styles/Hero.module.css'
import Image from 'next/image'
import FloatingCircle from './FloatingCircle'
import FloatingStyles from '@/styles/FloatingShape.module.css'
import FloatingTriangle from './FloatingTriangle'
import AnimationWrapper from './Animation'

const services = [
    "Software Development",
    "Web Application Development",
    "Digital Marketing",
    "SEO",
    "Advertisment",
    "Logo Designing",
    "Website Designing"
]

const Hero = () => {
    return (
        <AnimationWrapper>
            <Box className={HeroStyles.hero}>
                <Grid container>
                    <Grid item md={6} sm={12} xs={12} alignContent="center" className={HeroStyles.leftContent}>
                        <Box className={HeroStyles.heroContent}>
                            <Typography variant="heroHeader">Empowering Tomorrow's Technology Today</Typography>
                            <Typography variant="heroSecondaryHeader">- Your IT solution partner</Typography>
                            <Typography variant="heroText" mt={3}>
                                {services.map((service, key) => (
                                    <span key={key}>
                                        {service}
                                        {key !== services.length - 1 && " | "} {/* Add pipe only if it's not the last element */}
                                    </span>
                                ))}
                            </Typography>
                            <Button variant="contained" className={HeroStyles.cta}>Schedule a Call</Button>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} px={3} className={HeroStyles.rightContent}>
                        <Box className={FloatingStyles.floatingShape}><FloatingCircle startColor="#0074cc" endColor="#008080" /></Box>
                        <Image src='/hero.png' height="100" width="70" layout='responsive' className={HeroStyles.image} alt="Techingivo Hero" priority />
                        <Box className={FloatingStyles.floatingShape} bottom="2rem" right="2rem"><FloatingTriangle height={100} width={100} startColor="#0074cc" endColor="#008080" /></Box>
                    </Grid>
                </Grid>
            </Box>
        </AnimationWrapper>
    )
}

export default Hero