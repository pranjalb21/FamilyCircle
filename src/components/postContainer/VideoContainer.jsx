import React from 'react'
import {MediaPostCard, TweetPostCard} from '..'
import { Link } from 'react-router-dom'

export default function PostContainer() {
  return (
    <div className='p-4 flex gap-4 flex-wrap'>
      <Link to={`/videos/${1}`}><MediaPostCard /></Link>
    </div>
  )
}
