import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <div>
            <Box position="fixed" top="0" left="0" zIndex={999} width="100%" maxWidth={1600}>
                <Header />
            </Box>
            <Box my={5} py={5} px={3}>
                <Breadcrumb activeLink="Contact" />
                <Grid container>
                    <Grid item lg={6} md={12} sm={12} xs={12} alignItems="center">
                        <Box position="relative" height="80%"my={2} minHeight="30vh">
                            <Image src="/support.svg" fill objectFit='contain' />
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <Card variant='elevation'>
                            <CardContent>
                                <Typography fontSize="2rem" mb={2}>Contact Us</Typography>
                                <form>
                                    <TextField style={{marginBottom:'1rem'}}  fullWidth label="Email" />
                                    <TextField style={{marginBottom:'1rem'}}  fullWidth label="Phone" />
                                    <TextField style={{marginBottom:'1rem'}}  fullWidth label="Subject" />
                                    <TextField style={{marginBottom:'1rem'}}  fullWidth label="Messgae" multiline rows={4} />
                                    <Button variant='contained' fullWidth> Send Message </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    )
}

export default index