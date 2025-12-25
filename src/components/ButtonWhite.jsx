import React from 'react'

export default function ButtonWhite({text}) {
  return (
    <div className="bg-transparent border hover:bg-blue-400 text-blue-600 hover:text-white border-blue-600  py-2 px-6 rounded-3xl text-[20px]">{text}</div>
  )
}
