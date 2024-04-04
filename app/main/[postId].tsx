"use client";
import { Box, Heading, Text, Avatar, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (!postId) return; // Guard clause if postId is not defined
      const postResponse = await fetch(`https://jsonplaceholder.typicode.com/main/posts/${postId}`);
      const post = await postResponse.json();
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/main/posts/${postId}/comments`);
      const comments = await commentsResponse.json();
      setPostDetails({ ...post, comments });
    };
    fetchData();
  }, [postId]);

  if (!postDetails) return <p>Loading...</p>;

  return (
    <Box p={5}>
      <Heading mb={4}>{postDetails.title}</Heading>
      <Text mb={4}>{postDetails.body}</Text>
      <Heading size="md" mb={4}>Comments</Heading>
      {postDetails.comments.map(comment => (
        <Box key={comment.id} mt={4}>
          <Flex align="center">
            <Avatar name={comment.name} size="sm" mr={2} />
            <Text fontWeight="bold">{comment.name}:</Text>
          </Flex>
          <Text ml={12}>{comment.body}</Text>
        </Box>
      ))}
    </Box>
  );
}
