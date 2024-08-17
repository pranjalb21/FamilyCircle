import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Subscriber from '../components/subscriber/Subscriber'

export default function SubscriberPage({title}) {
  useEffect(()=>{document.title=`FamilyCircle | ${title}`},[])
  return (
    <Layout><Subscriber /></Layout>
  )
}
