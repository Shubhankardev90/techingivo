import Breadcrumb from '@/components/Breadcrumb'
import Header from '@/components/Header'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FeatureDescriptionStyles from '@/styles/FeatureDescription.module.css'
import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'
import ProcessCard from '@/components/ProcessCard'
import {services} from '@/data/services'
import TechnologyCard from '@/components/TechnologyCard'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
const FeatureDescription = () => {
  const router = useRouter();
  const {feature_name} = router.query; 
  const service = services.find(s => s.link === `/services/${feature_name}`);

  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <div>
      <Box position="fixed" top="0" left="0" zIndex={999} width="100%" maxWidth={1600}>
        <Header />
      </Box>
      <Box pt={5} px={3} mt={5} mb={2}>
        <Breadcrumb activeLink={service.name} />
        <Grid container py={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className={FeatureDescriptionStyles.mainImage} >
              <Image src='/services/web-development.png' alt="web-development" fill objectFit='contain' />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant='h2' mb={2}>Web Development</Typography>
            <Typography variant='body1'>
              Web development is the process of creating and maintaining websites or web applications. It encompasses a range of tasks, including web design, content creation, client-side scripting, server-side scripting, and network security configuration. Web developers use various programming languages, such as HTML, CSS, and JavaScript, to build the structure, style, and functionality of a website. Additionally, server-side technologies like PHP, Python, or Ruby are often employed to handle database interactions and other server-related tasks. The field of web development constantly evolves with advancements in technology, leading to the adoption of new frameworks, libraries, and tools. Effective web development requires a combination of creativity, problem-solving skills, and a solid understanding of programming concepts to deliver engaging and functional online experiences.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <SectionHeading  mainHeading="Our Process" description="We follow agile methodology" />
      <Grid container px={3} mb={3}>
        {
          service.processes && service.processes.map((_process, key)=>(
            <Grid item xl={3} lg={4} md={6} sm={12} key={key} padding={2}>
              <ProcessCard index ={_process.id} title={_process.title} description={_process.description} />
            </Grid>
          ))
        }
      </Grid>
      <SectionHeading mainHeading="Our Technologies" description="What we use ?" /> 
      <Grid container px={3} mb={2}>
        {
          
          service.technologies && service.technologies.map((technology, key)=>(
            <Grid item xl={3} lg={4} md={6} sm={12} key={key} padding={1}>
              <TechnologyCard name={technology.name} description={technology.description} icon={technology.icon} />
            </Grid>
          ))

        }
      </Grid>
      <Footer/>
    </div>
  )
}

export default FeatureDescription