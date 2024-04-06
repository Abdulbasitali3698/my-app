import React from 'react'
import { getData } from '../action';
import { Box, Heading, Text } from '@chakra-ui/react';

export default async function Pdata() {
    const data = await getData();
  return (
    <Box p={5}>
        <Heading mb={4}>Posts</Heading>
        {data.map((post: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; body: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.body}</Text>
            </Box>
        ))}
     </Box>
  )
}
