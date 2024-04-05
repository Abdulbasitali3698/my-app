import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

const getPostList = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

export default async function PostsList() {
    const posts= await getPostList();
  return (
    <Box p={5}>
            <Heading mb={4}>List of Posts</Heading>
            {posts.map(post => (
                <Box key={post.id} p={5} shadow="md" borderWidth="1px" cursor='pointer'>
                    <Heading fontSize="xl">{post.title}</Heading>
                    <Text mt={4}>{post.body}</Text>
                </Box>
            ))}
    </Box>
  )
}
