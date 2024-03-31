"use client"
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

export default function DataFetch() {
    const [posts,setPosts]=useState([]);
    const fetchPosts=async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data= await response.json();
        setPosts(data);
    };
    useEffect(()=>{
        fetchPosts();
    },[]);
  return (
    <Box p={5}>
      <Heading mb={4}>Posts</Heading>
      <Stack spacing={8}>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.body}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
