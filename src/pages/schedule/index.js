import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import ContactAnimationData from '../../../public/contact.json'
import LottieAnimation from '@/components/Lottie';

const Schedule = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/v1/email/send-query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Message sent successfully');
                // You can add additional logic here after a successful submission
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <Box position="fixed" top="0" left="0" zIndex={999} width="100%" maxWidth={1600}>
                <Header />
            </Box>
            <Box my={5} py={5} px={3}>
                <Breadcrumb activeLink="Contact" />
                <Grid container>
                    <Grid item lg={6} md={12} sm={12} xs={12} alignItems="center">
                        <Box position="relative" height="80%" my={2} minHeight="30vh">
                            {/* <Image src="/support.svg" fill objectFit='contain' /> */}
                            <LottieAnimation animationData={ContactAnimationData} />
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <Card variant='elevation'>
                            <CardContent>
                                <Typography fontSize="2rem" mb={2}>Contact Us</Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        style={{ marginBottom: '1rem' }}
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <TextField
                                        style={{ marginBottom: '1rem' }}
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    <TextField
                                        style={{ marginBottom: '1rem' }}
                                        fullWidth
                                        label="Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    <TextField
                                        style={{ marginBottom: '1rem' }}
                                        fullWidth
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                    <TextField
                                        style={{ marginBottom: '1rem' }}
                                        fullWidth
                                        label="Message"
                                        multiline
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                    <Button type="submit" variant='contained' fullWidth> Send Message </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    );
};

export default Schedule;
