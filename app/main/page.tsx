"use client";
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const router = useRouter(); // Use the useRouter hook

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  const handlePostClick = (postId: any) => {
    router.push(`/main/posts/${postId}`); // Navigate to the post detail page
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Posts</Heading>
      <Stack spacing={8}>
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" onClick={() => handlePostClick(post.id)} cursor="pointer">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.body}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
