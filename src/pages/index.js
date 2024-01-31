import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProcessCard from '@/components/ProcessCard'
import SectionHeading from '@/components/SectionHeading'
import Services from '@/components/Services'
import { Box, Grid } from '@mui/material'
import React from 'react'

const itConsultancySteps = [
  {
    step: 1,
    title: 'Initiation and Understanding',
    description: [
      'Collaborative meetings to understand business goals and challenges.',
      'Identify key stakeholders and gather detailed requirements.',
      'Define project scope and objectives.'
    ]
  },
  {
    step: 2,
    title: 'Documentation and Analysis',
    description: [
      'Document requirements, both functional and non-functional.',
      'Conduct a comprehensive analysis of current IT infrastructure.',
      'Identify gaps and areas for improvement.'
    ]
  },
  {
    step: 3,
    title: 'Proposal and Agreement',
    description: [
      'Develop a proposal with recommended solutions, timelines, and costs.',
      'Review and finalize the consultancy agreement.'
    ]
  },
  {
    step: 4,
    title: 'Project Planning',
    description: [
      'Create a detailed project plan with tasks, milestones, and resources.',
      'Define roles and responsibilities within the project team.',
      'Establish communication channels and reporting mechanisms.'
    ]
  },
  {
    step: 5,
    title: 'Design and Solution Development',
    description: [
      'Design technical architecture and system components based on requirements.',
      'Develop prototypes or proofs of concept for validation.',
      'Begin the actual development or implementation.'
    ]
  },
  {
    step: 6,
    title: 'Testing and Quality Assurance',
    description: [
      'Conduct thorough testing to ensure solutions meet specified requirements.',
      'Perform system integration testing and user acceptance testing.',
      'Address and resolve any identified issues or bugs.'
    ]
  },
  {
    step: 7,
    title: 'Deployment and Implementation',
    description: [
      'Plan and execute the deployment of IT solutions.',
      'Provide training to end-users as needed.',
      'Monitor implementation and address any issues.'
    ]
  },
  {
    step: 8,
    title: 'Documentation and Knowledge Transfer',
    description: [
      'Document newly implemented systems, configurations, and processes.',
      'Provide documentation and knowledge transfer sessions.',
      'Ensure client staff can maintain and support solutions.'
    ]
  },
  {
    step: 9,
    title: 'Review and Evaluation',
    description: [
      'Conduct post-implementation review to assess project success.',
      'Gather feedback from clients and stakeholders.',
      'Identify lessons learned and areas for improvement.'
    ]
  },
  {
    step: 10,
    title: 'Support and Maintenance',
    description: [
      'Offer ongoing support and maintenance services.',
      'Monitor performance and address any issues promptly.',
      'Provide recommendations for future enhancements.'
    ]
  }
];


const Home = () => {
  return (
    <div>
      <Box position="fixed" top="0" left="0" zIndex={999} width="100%" maxWidth={1600}>
        <Header />
      </Box>
      <Hero />
      <Box mt={4}>
        <Services />
      </Box>
      <SectionHeading mainHeading="Our Process" description="We follow agile methodology" />
      <Grid container px={3} mb={3}>
        {
          itConsultancySteps.map((_process, key) => (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={key} padding={2}>
              <ProcessCard index={_process.step} title={_process.title} description={_process.description} />
            </Grid>
          ))
        }
      </Grid>
      <Footer />
    </div>
  )
}

export default Home