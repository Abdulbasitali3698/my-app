"use client"
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

export default function SearchResult({query}) {
    const[posts,setPosts]=useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`);
        const data = await response.json();
        setPosts(data);
        };

        if (query.length > 0) { 
        fetchPosts();
        } else {
        setPosts([]); 
        }
    },[query]);
  return (
    <Box p={5}>
      <Heading mb={4}>Posts</Heading>
      <Stack spacing={8}>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Text mt={4}>{post.id}</Text>
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.body}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
