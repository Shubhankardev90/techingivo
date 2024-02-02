import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FooterStyles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { CopyrightRounded, Email, Phone } from '@mui/icons-material'

const footerLinks = [
    {
        name: "Company Links",
        links:[
            {
                name: "About Us",
                link: "/services/about"
            },
            {
                name: "About Team",
                link: "/services/about"
            },
            {
                name: "About Company",
                link: "/services/about"
            },
        ]
    },
    {
        name:"Our Services",
        links:[
            {
                name: "Web Development",
                link:"/services/web-development"
            },
            {
                name: "App Development",
                link:"/services/app-development"
            },
            {
                name: "Digital Marketing",
                link:"/services/web-development"
            },
            {
                name: "ADS Analysis",
                link:"/services/web-development"
            },
        ]
    },
    {
        name:"Quick Links",
        links:[
            {
                name: "Home",
                link:"/"
            },
            {
                name: "about",
                link:"about/"
            },
            {
                name: "Home",
                link:"/services"
            },
        ]
    }
]

const Footer = () => {
  return (
    <>
        <Box bgcolor="whitesmoke">
            <Grid container py={5} rowGap={5}>
                <Grid item lg={3} md={4} sm={6} xs={12} textAlign="center">
                    <Box position="relative" className={FooterStyles.footerLogo}>
                        <Image src='/logo.png' fill objectFit='contain' style={{mixBlendMode:'darken'}} />
                    </Box>
                    <Typography pl={3} mt={1}><Link href="phone: +91 7982098409"> <Phone/>: +91 7982098409</Link></Typography>
                    <Typography pl={3}><Link href="mail-to:techingivo@gmail.com"> <Email/>: techingivo@gmail.com</Link></Typography>
                </Grid>
                {
                    footerLinks.map((footerLink, key) => (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={key} textAlign="center">
                            <Typography variant='h4'>{footerLink.name}</Typography>
                            <Box display="flex" flexDirection="column" rowGap="0.3rem" mt={2}>
                                {
                                    footerLink.links.map((link, key)=>(
                                        <Link href={link.link} key={key}>{link.name}</Link>
                                    ))
                                }
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
        <Typography py={2} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>All rights reserved <CopyrightRounded fontSize='small' /> to Techingivo </Typography> 
    </>
  )
}

export default Footer