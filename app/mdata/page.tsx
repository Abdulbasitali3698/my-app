"use client"
import React, { useState } from 'react'
import Search from '../components/search'
import SearchResult from '../components/searchresult'

export default function MainData() {
    const [query,setQuery]=useState('');

  return (
    <>
        <Search  onSearch={setQuery}/>
        <SearchResult query={query}/>
    </>
  )
}
