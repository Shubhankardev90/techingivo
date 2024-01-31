import AnimationWrapper from '@/components/Animation'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionHeading from '@/components/SectionHeading'
import Services from '@/components/Services'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const about = () => {

  return (
    <AnimationWrapper>
      <Box px={3}>
        <Box position="fixed" top="0" left="0" zIndex={999} width="100%" maxWidth={1600}>
          <Header />
        </Box>
        <Box py={5} mt={5}>
          <Breadcrumb activeLink='about' />
          <Box my={4}>
            <SectionHeading mainHeading="Our Company" description="Learn more about our company" />
            <Grid container>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <Box position="relative" width="100%" style={{ height: '100%', minHeight: '30vh' }}>
                  <Image src="/hero.png" fill objectFit='contain' />
                </Box>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <Typography variant='body1'>
                  Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense.

                  It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.


                  It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

                  Lorem ipsum contains the typefaces moreIt is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals.


                  It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.

                  Lorem ipsum contains the typefaces more
                  in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size .
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Services />
        </Box>
      </Box>
      <Footer />
    </AnimationWrapper>
  )
}

export default about