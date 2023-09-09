import React from 'react'

export default function ProjectTag({name,onClick,isSelected}) {
    const buttonStyle=isSelected ?
    "text-white border-purple-500 ":"text-[#ADB7BE] border-slate-600 hover:border-white "
  return (
   <button className={`${buttonStyle}rounded-full border-2 border-[#700cfc] px-6 py-3 text-xl cursor-pointer`}
   onClick={()=>onClick(name)}>
    {name}
   </button>
  )
}
