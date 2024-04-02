"use client"
import { Box, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

export default function FetchPosts() {
    const[posts,setPosts]=useState([]);
    const[selectedPosts,setSelectedPosts]=useState(null);
    const{isOpen, onOpen, onClose}=useDisclosure();
    useEffect(()=>{
        const fetchData= async ()=>{
            const response= await fetch('https://jsonplaceholder.typicode.com/posts');
            const data= await response.json();
            setPosts(data);
        };
        fetchData();
    },
    []
    );
    const fetchPostDetailsAndComments= async(postId: any)=>{
        const postResponse= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postDetails=await postResponse.json();
        const commentsResponse= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments= await commentsResponse.json();
        setSelectedPosts({...postDetails,comments});
        onOpen();
    }
  return (
    <Box p={5}>
      <Heading mb={4}>Posts</Heading>
      <Stack spacing={8}>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" onClick={()=>fetchPostDetailsAndComments(post?.id)} cursor='pointer'>
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.body}</Text>
          </Box>
        ))}
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>
                {selectedPosts?.title}
            </ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <Text>{selectedPosts?.body}</Text>
                <Text>Modal ID:{selectedPosts?.id}</Text>
                {selectedPosts?.comments.map(comment=>(
                    <Box key={comment.id}>
                        <Text>{comment.name}</Text>
                        <Text>{comment.body}</Text>
                    </Box>
                ))}
            </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
