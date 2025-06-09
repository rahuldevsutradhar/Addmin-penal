import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/logo.png'
import profil from '../assets/profil.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '../components/Button'
import { IoNotifications } from 'react-icons/io5'
import { FaCaretDown } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav>
        <Container>
            <Flex className='items-center px-4 py-4 shadow-md'>
                <div className='w-2/12'>
                <Image src={logo} className='h-[39px] w-[120px]  '/>
                </div>
                <div className='w-10/12 flex items-center gap-x-200'>
                <div>
                    <GiHamburgerMenu className='w-4 h-5'/>
                </div>
                <div className='flex items-center gap-x-5'>
                    <Button text='View website' className='bg-blue-500'/>
                    <div className='flex items-center'>
                        <IoNotifications />
                    <span className='bg-[#dc3545] text-white rounded-full py-[6px] px-[10px] text-[11px] '>145  </span> 
                    <FaCaretDown />
                    </div>
                     <Image src={profil} className='w-10 h-10 rounded-full'/>

                </div>
                </div>

            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar