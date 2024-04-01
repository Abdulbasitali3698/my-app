"use client"
import { Box, Button, Flex, Input, Stack } from '@chakra-ui/react'
import { useState } from 'react'
export default function Search({onSearch}) {
    const[query,setQuery]=useState('');
    const handleChange=(e)=>{
        const value=e.target.value;
        setQuery(value);
        onSearch(value);
    }

  return (
        <Input placeholder='Enter value' size='md' width='80' onChange={handleChange} value={query} />  
    )
}
