import Button from '@/components/Button'
import Lobby from '@/layouts/Lobby'
import Navbar from '@/layouts/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <div className=' mb-20 justify-center items-center grid min-h-screen'>
        <Lobby/>
      </div>
    </div>
  )
}

export default index