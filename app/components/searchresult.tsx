"use client"
import { Box, Heading, Text } from '@chakra-ui/react';
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
    <Box>
        {posts.map(post =>(
            <Box key={post.id}>
                <Heading>{post.title}</Heading>
                <Text>{post.body}</Text>
            </Box>
        ))}
    </Box>
  )
}
