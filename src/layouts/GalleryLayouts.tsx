import Card from '@/components/Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ITEMS_PER_PAGE = 12

const GalleryLayouts = () => {
  const [data, setData] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedData = data.slice(startIndex, endIndex)

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/`)
        if (!response) return console.error('No response')
        const items = response.data?.images || response.data.images
        setData(items)
      } catch (error) {
        console.error(error)
      }
    }

    getAllData()
  }, [])

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-4 mt-32 z-10">
        {paginatedData.map((item: any) => (
          <Card key={item.id} name={item.name} url={item.url} />
        ))}
      </div>

      <div className="flex justify-center items-center my-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default GalleryLayouts
