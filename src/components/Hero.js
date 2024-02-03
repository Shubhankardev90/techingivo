import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroStyles from '@/styles/Hero.module.css'
import Image from 'next/image'
import FloatingCircle from './FloatingCircle'
import FloatingStyles from '@/styles/FloatingShape.module.css'
import FloatingTriangle from './FloatingTriangle'
import LottieAnimation from './Lottie'
import HeroAnimationData from '../../public/hero.json'
import { motion } from 'framer-motion';

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
    <Box className={HeroStyles.hero}>
        <Grid container>
            <Grid item md={6} sm={12} xs={12} alignContent="center" className={HeroStyles.leftContent}>
                <Box className={HeroStyles.heroContent}>
                    <motion.div initial={{x: '-100%'}} animate={{x: 0, transition: { duration: 0.5, ease: 'easeInOut' }}} exit={{x:'-100%'}}>
                        <Typography variant="heroHeader">Empowering Tomorrow's Technology Today</Typography>
                    </motion.div>
                    <motion.div initial={{x: '-100%'}} animate={{x: 0, transition: { duration: 0.5, ease: 'easeInOut' }}} exit={{x:'-100%'}}>
                        <Typography variant="heroSecondaryHeader">- Your IT solution partner</Typography>
                    </motion.div>
                    <motion.div initial={{x: '-100%'}} animate={{x: 0, transition: { duration: 0.5, ease: 'easeInOut' }}} exit={{x:'-100%'}}>
                        <Typography variant="heroText" mt={3}>
                            {services.map((service, key) => (
                                <span key={key}>
                                {service}
                                {key !== services.length - 1 && " | "} {/* Add pipe only if it's not the last element */}
                                </span>
                            ))}
                        </Typography> 
                    </motion.div>  
                    <motion.div initial={{x: '-100%'}} animate={{x: 0, transition: { duration: 0.5, ease: 'easeInOut' }}} exit={{x:'-100%'}}>
                        <Button variant="contained" className={HeroStyles.cta}>Schedule a Call</Button>  
                    </motion.div>           
                </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12} px={3} className={HeroStyles.rightContent}>
                <Box className={FloatingStyles.floatingShape}><FloatingCircle startColor="#0074cc" endColor="#008080"/></Box>
                {/* <Image src='/hero.png' height="100" width="70" layout='responsive' className={HeroStyles.image} alt="Techingivo Hero" priority /> */}
                <LottieAnimation animationData={HeroAnimationData} loop={false} />
                <Box className={FloatingStyles.floatingShape} bottom="2rem" right="2rem"><FloatingTriangle height={100} width={100} startColor="#0074cc" endColor="#008080"/></Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Hero