import React from 'react'

export default function Container({children}) {
  return (
    <div className="flex bg-grey-100 w-full min-h-screen">
        {children}
    </div>
  )
}
