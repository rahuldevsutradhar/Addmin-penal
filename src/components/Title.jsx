import React from 'react'

const Title = ({text, className}) => {
  return (
    <div className={`text-[13px] font-open font-semibold text-[#343A40] ${className}`}>
     {text}
    </div>
  )
}

export default Title