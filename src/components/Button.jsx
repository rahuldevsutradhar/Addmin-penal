import React from 'react'

const Button = ({text,className}) => {
  return (
    <div className={`px-4 py-2 inline text-white  text-[11px] font-open font-normal cursor-pointer ${className}`}> {text} </div>


    
  )
}

export default Button