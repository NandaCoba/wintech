import React from 'react'

const Button = ({ usingBg,text } : any) => {
  return (
    <button className= {` cursor-pointer rounded-lg border w-40 h-12 ${usingBg ? "bg-black" : "bg-transparent text-black" }`}>{text}</button>
  )
}

export default Button