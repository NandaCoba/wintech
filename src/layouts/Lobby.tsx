import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const Lobby = () => {
  return (
    <div className=' grid justify-center items-center text-center space-y-5'>
        <h1 className=' font-bold text-6xl text-black'>Wellcome to Picture Gallery</h1>
        <p className=' text-gray-500 text-2xl'>Discover and explore beatiful image</p>
    <div className=' flex space-x-5 justify-center items-center'>
        <Link href={"/gallery"}><Button usingBg={true} text={"View Gallery"} /></Link>
        <Link href={"/"}><Button usingBg={false} text={"Learn More"}/></Link>
      </div>
    </div>
  )
}

export default Lobby