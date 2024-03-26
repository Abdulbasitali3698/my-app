"use client"
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Link, Menu, MenuButton, Stack, useDisclosure, Collapse } from "@chakra-ui/react";
import { FaBars, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

export default function Main() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box bg="#33325D" color="white">
      <Flex alignItems="center" padding="0px 10px" justifyContent="space-between">
        <Box >
          <Heading size="lg">Navbar</Heading>
        </Box>
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          size="lg"
          mr={0}
          position='sticky'
          
        />
        <Collapse in={isOpen} animateOpacity
>
          <Box
            bg="#33325D"
            color="white"
            position="absolute"
            top="100%" /* Positioning the menu below the navbar */
            left="0"
            right="0"
            zIndex="1" /* Ensure menu appears above other content */
            padding="10px 0px"
          >
            <Stack
              direction="column"
              spacing="24px"
              align="center"
              justify="center"
              width="100%"
            >
              <Menu>
                <MenuButton px={4} py={2} transition="all 0.2s" borderRadius="md" _hover={{ bg: "gray.400" }}>
                  CATEGORIES <ChevronDownIcon />
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton color="#7777AD" px={4} py={2} transition="all 0.2s" borderRadius="md" _hover={{ bg: "gray.400" }}>
                  DEALS <ChevronDownIcon />
                </MenuButton>
              </Menu>
              <Link _hover={{ textDecoration: 'none', color: 'gray.200' }} color='#7777AD'>ABOUT</Link>
              <Link _hover={{ textDecoration: 'none', color: 'gray.200' }} color='#7777AD'>ADVERTISE</Link>
            </Stack>
          </Box>
        </Collapse>
        <Box
        display={{base:'none', md:'flex'}}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="24px"
            align="center"
            justify="center"
            width="100%"
          >
            <Menu>
              <MenuButton px={4} py={2} transition="all 0.2s" borderRadius="md" _hover={{ bg: "gray.400" }}>
                CATEGORIES <ChevronDownIcon />
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton color="#7777AD" px={4} py={2} transition="all 0.2s" borderRadius="md" _hover={{ bg: "gray.400" }}>
                DEALS <ChevronDownIcon />
              </MenuButton>
            </Menu>
            <Link _hover={{ textDecoration: 'none', color: 'gray.200' }} color='#7777AD'>ABOUT</Link>
            <Link _hover={{ textDecoration: 'none', color: 'gray.200' }} color='#7777AD'>ADVERTISE</Link>
          </Stack>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          color="#7777AD"
        >
          <Stack direction="row" spacing={4}>
            <Link><FaTwitter /></Link>
            <Link><FaFacebookF /></Link>
            <Link><FaPinterestP /></Link>
            <Link><FaFacebookF /></Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}
