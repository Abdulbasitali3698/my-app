"use client";
import { Box, Button, Card, CardBody, Grid, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

interface GridCardProps {
    onOpenModal: (title: string) => void;
  }
export default function GridCard({ onOpenModal }: GridCardProps) {
  const paddingX = useBreakpointValue({ base: '20px', md: '105px' });
  const gridTemplateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)', 
    md: 'repeat(2, 1fr)',  
    lg: 'repeat(3, 1fr)', 
  });
  return (
    <Box pt='40px' px={paddingX}>
      <Grid templateColumns={gridTemplateColumns} gap={6}>
        {[
            {title:"Title Of The Blog 1", id:1},
            {title:"Title Of The Blog 2", id:2},
            {title:"Title Of The Blog 3", id:3}
        ].map((card) => (
          <Card backgroundColor='#F5F9FB' alignItems='center' key={card.id}>
            <CardBody>
              <Image src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='Image' />
              <br />
              <Link _hover={{ textDecoration: 'none', color: '#4DA3BF' }} onClick={() => onOpenModal(card.title)}>DESIGN</Link>
              <br />
              <Heading size='lg'>{card.title}</Heading>
              <br />
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, assumenda! Dolores, aperiam. Mollitia ut quas consequatur delectus velit, iure ipsum illo totam maxime, officia sapiente, incidunt aliquam optio quibusdam sed?</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>{currentTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal> */}
    </Box>
  );
}
