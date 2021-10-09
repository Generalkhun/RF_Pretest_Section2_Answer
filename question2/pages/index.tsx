import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import CategoryDisPlayingTable from '../components/CategoryDisPlayingTable'
import InputSearchCatBox from '../components/InputSearchCatBox'
import styles from '../styles/Home.module.css'


const Home = ({ categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchingCatChars, setSearchingCatChars] = useState('')

  const updateSearchingCatChars = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchingCatChars(e.target.value)
  }
  return (
    <div style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 100, paddingBottom: 100 }}>
      <InputSearchCatBox
        onSearchCat={updateSearchingCatChars}
      />
      <CategoryDisPlayingTable
        categories={categories}
        searchingCatChars={searchingCatChars}
      />
    </div>
  )
}

export default Home

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.publicapis.org/categories')
  const categories = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      categories,
    },
  }
}