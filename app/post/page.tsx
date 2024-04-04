"use client"
import { Box, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function FetchPosts() {
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    const handlePostClick = (postId) => {
        router.push(`/post/${postId}`);
    };

    return (
        <Box p={5}>
            <Heading mb={4}>Posts</Heading>
            {posts.map(post => (
                <Box key={post.id} p={5} shadow="md" borderWidth="1px" onClick={() => handlePostClick(post?.id)} cursor='pointer'>
                    <Heading fontSize="xl">{post.title}</Heading>
                    <Text mt={4}>{post.body}</Text>
                </Box>
            ))}
        </Box>
    );
}
