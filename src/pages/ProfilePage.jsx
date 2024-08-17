import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Profile from '../components/profile/Profile'

export default function ProfilePage({title}) {
  useEffect(()=>{document.title=`FamilyCircle | ${title}`},[])
  return (
    <Layout><Profile /></Layout>
  )
}
