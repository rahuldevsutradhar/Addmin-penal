import React from 'react'
import Flex from './Flex'
import { FaShoppingCart } from 'react-icons/fa'
import Title from './Title'
import { CgRowLast } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const CartTwo = ({text,number,className}) => {
  return (
    <Link>
    <Flex className={`w-[260px] h-[95px] py-6 pl-2  bg-white items-center shadow-lg gap-x-4 ${className}`}>
        <div className='bg-[#367DFF] px-6 py-5 '>
           <CgRowLast  className='text-white text-[28px]'/>
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