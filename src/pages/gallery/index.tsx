import GalleryLayouts from '@/layouts/GalleryLayouts'
import Navbar from '@/layouts/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar/>
    <div className=' justify-center items-center flex min-h-screen'>
        <GalleryLayouts/>
    </div>

    </div>
  )
}

export default index