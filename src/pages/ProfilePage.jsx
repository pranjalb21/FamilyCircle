import React, { useEffect } from 'react'
import { Body } from '../components'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const navigate = useNavigate()
  useEffect(()=>{navigate("profile/videos")},[navigate])
  return (
        <Body/>
  )
}
