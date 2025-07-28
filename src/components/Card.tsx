import React from 'react'

const Card = ({ name, url }: any) => {
  return (
    <div className="relative cursor-pointer w-64 h-72 rounded-xl overflow-hidden group">
      {/* Gambar utama */}
      <img
        className="object-cover w-full h-full"
        src="/japan.jpg"
        alt={name}
      />

      {/* Overlay hitam saat hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 pointer-events-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 text-white transition duration-300 px-4 text-center z-10">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm">{url}</p>
      </div>
    </div>
  )
}

export default Card
