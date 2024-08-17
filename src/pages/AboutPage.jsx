import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import About from '../components/about/About'
import Container from '../components/container/Container'

export default function AboutPage({title}) {
  useEffect(()=>{document.title=`FamilyCircle | ${title}`},[])
  return (
    <Layout><About /></Layout>
  )
}
