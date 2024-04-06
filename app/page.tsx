"use client"
import { Box, Button, Card, CardBody, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import Header from "./components/header";
import BlogCard from "./components/card";
import GridCard from "./components/gcard";
import { SetStateAction, useState } from "react";

export default function Home() {

  const {isOpen, onOpen, onClose}=useDisclosure();
  //const [currentTitle, setCurrentTitle] = useState('');
  const[currentBlog,setCurrentBlog]=useState({});
  // Using useBreakpointValue for dynamic values based on breakpoints
  const paddingX = useBreakpointValue({ base: '20px', md: '105px' });
  const handleOpenModal = (blog: SetStateAction<{}>) => {
    setCurrentBlog(blog);
    onOpen();
  };
  return (
    <div>
      <Header/>
      <Box backgroundColor='#F5F9FB' w='100%' pt='40px'>
        <Box w='100%' px={paddingX}>
          <Box backgroundColor='white' w='100%' py='25px' px='20px' fontSize='30px' fontWeight='bold'>
            <h1>Currently Browsing: Design</h1>
          </Box>
        </Box>
        <GridCard onOpenModal={handleOpenModal}/>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{currentBlog.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={currentBlog.image} ></Image>
            <Text>{currentBlog.description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    
  );
}
