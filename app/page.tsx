"use client"
import { Box, Card, CardBody, Heading, Image, Link, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Header from "./components/header";
import BlogCard from "./components/card";
import GridCard from "./components/gcard";

export default function Home() {
  // Using useBreakpointValue for dynamic values based on breakpoints
  const paddingX = useBreakpointValue({ base: '20px', md: '105px' });
  return (
    <div>
      <Header/>
      <Box backgroundColor='#F5F9FB' w='100%' pt='40px'>
        <Box w='100%' px={paddingX}>
          <Box backgroundColor='white' w='100%' py='25px' px='20px' fontSize='30px' fontWeight='bold'>
            <h1>Currently Browsing: Design</h1>
          </Box>
        </Box>
        <GridCard/>
      </Box>
    </div>
  );
}
