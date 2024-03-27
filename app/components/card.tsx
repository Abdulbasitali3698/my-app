"use client"
import { Box, Card, CardBody, Grid, Heading, Image, Link, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export default function BlogCard() {
  const cardWidth = useBreakpointValue({ base: '100%', md: '33%' });
  const paddingX = useBreakpointValue({ base: '20px', md: '105px' });
  return (
    <div>
        <Box pt='40px' px={paddingX}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            {/* Repeated Card Component */}
            {[1, 2, 3].map((_, index) => (
              <Card backgroundColor='#F5F9FB' alignItems='center' w={cardWidth} key={index}>
                <CardBody>
                  <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Image'/>
                  <br />
                  <Link _hover={{ textDecoration: 'none', color: '#4DA3BF' }}>DESIGN</Link>
                  <br />
                  <Heading size='lg'>TITLE OF THE BLOG</Heading>
                  <br />
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, assumenda! Dolores, aperiam. Mollitia ut quas consequatur delectus velit, iure ipsum illo totam maxime, officia sapiente, incidunt aliquam optio quibusdam sed?</Text>
                </CardBody>
              </Card>
            ))}
          </Stack>
        </Box>
    </div>
  )
}
