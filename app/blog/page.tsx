"use client"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Link, Menu, MenuButton, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa'

export default function Blog() {
  return (
    <div style={{backgroundColor:'#F5F9FB', height: '100vh'}}>
        <div style={{background:'#33325D' ,height:'70px',width:'100%', color:'white'}}>
                <Flex alignItems='center' style={{padding:'0px 50px',height:'100%'}}>
                    <div >
                        <Box style={{}}>
                            <Heading >Navbar</Heading>
                        </Box>
                    </div>
                    <div style={{width:'100%',padding:'10vh'}}>
                        <Stack direction={['column','row']} >
                            <Menu >
                            <MenuButton
                                px={0}
                                py={0}
                                borderRadius='md'>
                                CATEGORIES <ChevronDownIcon />
                            </MenuButton>
                            <MenuButton
                                color='#7777AD'
                                px={0}
                                py={0}
                                borderRadius='md'>
                                DEALS <ChevronDownIcon />
                            </MenuButton>
                            </Menu>
                            <Link _hover={{ textDecoration: 'none' }} style={{color:'#7777AD'}}>ABOUT</Link>
                            <Link _hover={{ textDecoration: 'none' }} style={{color:'#7777AD'}}>ADVERTISE</Link>  
                        </Stack>      
                    </div>
                    <div style={{color:'#7777AD'}}>
                        <Stack direction={['column', 'row']}>
                            <Link><FaTwitter/></Link>
                            <Link><FaFacebookF/></Link>
                            <Link><FaPinterestP /></Link>
                            <Link><FaFacebookF /></Link>
                        </Stack>
                    </div>
                </Flex>    
        </div>
        <div style={{backgroundColor:'#0000ff52',height:'100%',width:'100%', paddingTop:'40px'}} >
            <div style={{height:'100px',width:'100%',paddingLeft:'105px'}}>
                <div style={{backgroundColor:'white',height:'100px',width:'90%',padding: '25px 0px 0px 20px',fontSize:'30px', font:'bold'}}>
                    <h1>
                        Currently Browsing: Design
                    </h1>
                </div>
            </div>    
        </div>
    </div>
  )
}
