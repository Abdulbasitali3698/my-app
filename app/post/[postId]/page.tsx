// pages/PostDetailsPage.js
"use client"
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = (props) => {
    const {params} = props
    const router = useRouter();
    const postId = router; // Extract postId from query params
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        const fetchPostDetailsAndComments = async () => {
            if (postId) {
                const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
                const postDetails = await postResponse.json();
                const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`);
                const comments = await commentsResponse.json();
                setPostDetails({ ...postDetails, comments });
            }
        };
        fetchPostDetailsAndComments();
    }, [postId]);

    if (!postDetails) return <p>Loading...</p>;

    return (
        <Box p={5} boxShadow="md" bg="white" borderRadius="md">
            <Heading mb={4}>{postDetails.title}</Heading>
            <Text mb={4}>{postDetails.body}</Text>
            {postDetails.comments && postDetails.comments.length > 0 && (
                <>
                <Heading size="md" mb={2}>Comments</Heading>
                {postDetails.comments.map(comment => (
                    <Flex key={comment.id} mt={4} flexDirection="column">
                    <Text fontWeight="bold">{comment.name}:</Text>
                    <Text ml={2}>{comment.body}</Text>
                    </Flex>
                ))}
                </>
            )}
        </Box>
    );
};

export default Page;
