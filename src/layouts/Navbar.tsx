import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed w-full h-20 bg-white z-50'>
        <div className=' justify-start flex space-x-5 p-4'>
            <h1 className=' font-bold text-black text-2xl'>Picture Galery</h1>
        <div className=' flex text-gray-600 space-x-10 p-1 ml-5'>
            <Link href={"/"}><p className=' cursor-pointer'>Home</p></Link>
            <p className=' cursor-pointer'>Pictures</p>
        </div>
        </div>
    </div>
  )
}

export default Navbar