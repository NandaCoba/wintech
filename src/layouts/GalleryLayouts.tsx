import Card from '@/components/Card'
import { apiUrl } from '@/utils/Api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GalleryLayouts = () => {
  const [data,setData] = useState([])

  useEffect(() => {

    const getAllData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/`)
            if(!response) console.error(response)
           const items = response.data?.images || response.data.images
      setData(items)
        } catch (error) {
            console.error(error)
        }
    }

    getAllData()
  },[])
  return (
    <div>

<div className="grid grid-cols-6 gap-4 p-4 mt-32 z-10">
  {Array.isArray(data) && data.map((items: any) => (
    <Card key={items.id} name={items.name} url={items.url} />
  ))}
</div>





    </div>
  )
}

export default GalleryLayouts