import React from 'react'
import Flex from './Flex'
import Title from './Title'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CartTwo = ({text,number,className}) => {
  return (
    <Link>
    <Flex className={`w-[260px] h-[95px] py-6 pl-2  bg-white items-center shadow-lg gap-x-4 ${className}`}>
        <div className='bg-[#36a3f7] px-6 py-5 '>
           <IoMdCheckmarkCircleOutline   className='text-white text-[26px]'/>
        </div>
         <div className='border-b-none hover:border-b'>
            <Title text={text}/>
            <Title text={number}/>
        </div>

    </Flex>
    </Link>
  )
}

export default CartTwo