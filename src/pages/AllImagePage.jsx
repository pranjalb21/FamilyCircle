import React from 'react'
import Layout from '../components/layout/Layout'
import ImageCard from '../components/card/ImageCard'

export default function AllImagePage() {

  return (
    <div className=" flex sm:flex-row w-full sm:flex-wrap flex-col sm:justify-center sm:items-start items-center p-4 gap-3 pb-20">
        <ImageCard />
        <ImageCard />
    </div>
  )
}
