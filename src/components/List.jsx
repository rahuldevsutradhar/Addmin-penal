import React from 'react'

const List = ({text,className}) => {
  return (
    <div className={`font-mon font-normal text-sm text-white hover:text-one duration-400 ${className}`}>{text}</div>
  )
}

export default List