"use client"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Link, Menu, MenuButton, Spacer } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa'


export default function Header() {
  return (
    <div style={{background:'#33325D' ,height:'50px',width:'100%'}}>
            <nav>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='md'>Navbar</Heading>
                </Box>
                <Box >
                    <Menu>
                        <MenuButton
                            px={4}
                            py={1}
                            borderRadius='md'>
                            File <ChevronDownIcon />
                        </MenuButton>
                        <MenuButton
                            px={4}
                            py={1}
                            borderRadius='md'>
                            File <ChevronDownIcon />
                        </MenuButton>
                    </Menu>
                    <Link _hover={{ textDecoration: 'none' }}>Chakra UI</Link>
                    <Link _hover={{ textDecoration: 'none' }}>Chakra UI</Link>
                </Box>
                <Spacer/>
                <Box>
                    
                </Box>
                    <Link><FaTwitter/></Link>
                    <Link><FaFacebookF/></Link>
                    <Link><FaPinterestP /></Link>
                    <Link><FaFacebookF /></Link>
                </Flex>

            </nav>
        </div>
  )
}
