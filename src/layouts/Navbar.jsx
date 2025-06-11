import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/logo.png'
import profil from '../assets/profil.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '../components/Button'
import { IoNotifications } from 'react-icons/io5'
import { FaCaretDown } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import IconCard from '../components/IconCard'
import { MdBackup, MdOutlineCleaningServices, MdOutlineManageSearch } from 'react-icons/md'
import { FaBook, FaExchangeAlt, FaFirstOrder, FaHome, FaList, FaProductHunt, FaQuestionCircle, FaTelegramPlane, FaUser, FaWifi } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BiSolidMessageRounded } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleIncrement = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav>
            <Container>
                <Flex className='items-center px-4 py-4 shadow-md'>
                    <div className='w-full md:w-2/12 flex items-center justify-between'>
                        <div className='block md:hidden'>
                            <GiHamburgerMenu onClick={handleIncrement} className='w-4 h-5' />
                        </div>

                        <Image src={logo} className='h-[34px] md:h-[39px] w-[175px] md:w-[120px]' />
                        <div className='block md:hidden'>
                            <BsThreeDotsVertical  className='w-4 h-5' />
                        </div>
                    </div>

                    {
                        isOpen && (
                            <div className="fixed top-17 left-0 h-full w-[281px] bg-white z-50 shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out md:hidden">
                                <div className="p-4 flex flex-col gap-y-2">
                                    

                                    <Link to={'/profil'}>
                                        <div className='  flex tiems-center gap-x-2 mx-2 my-6 '>
                                            <Image src={profil} className='w-10 h-10 rounded-full' />
                                            <div className='font-open text-[#777] text-[11px] pb-2 '>
                                                <p>Admin</p>
                                                <p>Administator</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <IconCard title='Dashbord' icon={<FaHome />} to='/' />
                                    <IconCard title="Manage Categories" icon={<FaList />}
                                        subItems={["Categories", "Sub categories", "Child categories"]} />
                                    <IconCard title="Manage Reels" icon={<FaList />}
                                        subItems={["Reels", "Reels List"]} />
                                    <IconCard title="Manage Product" icon={<FaProductHunt />}
                                        subItems={['Brands', ' Add Product', 'All Products', 'Stock Out Products',
                                            'Campaign Offer', 'CSV Import & Export', 'Product Reviews',
                                            'Manage Orders']} />
                                    <IconCard title="Manage order" icon={<FaFirstOrder />}
                                        subItems={['All Orders', ' Pending Orders', 'Progress Orders', 'Delivered Orders', 'Canceled Orders', 'Transactions']} />
                                    <IconCard title='Transactions' icon={<FaExchangeAlt />} to='/' />
                                    <IconCard title="Ecommerce" icon={<CgWebsite />}
                                        subItems={['Set Coupons', 'Shipping', 'State Tax', 'Tax', 'Currency', 'Payment', 'Customer List']} />
                                    <IconCard title='Customers List' icon={<FaPeopleGroup />} to='/' />
                                    <IconCard title='Manage Tickets' icon={<BiSolidMessageRounded />} to='/' />
                                    <IconCard title="Manage Site" icon={<MdOutlineManageSearch />}
                                        subItems={['General Settings', 'Courier API', 'Home Page', 'Sliders', 'Services', 'Visibility', 'Social Login', 'Email Settings', 'SMS Settings', 'Announcement', 'Cookies Alert', 'Maintainance', 'Sitemap', 'Language', 'Manage Faqs']} />
                                    <IconCard title="Manage Faqs" icon={<FaQuestionCircle />}
                                        subItems={['Categories', 'Faqs']} />
                                    <IconCard title="Manage Blogs" icon={<FaWifi />}
                                        subItems={['Categories', 'Blogs']} />
                                    <IconCard title='Manage Pages' icon={<FaBook />} to='/' />
                                    <IconCard title='Subscribers List' icon={<FaTelegramPlane />} to='/' />
                                    <IconCard title="System User" icon={<FaUser />}
                                        subItems={['System User', 'Role']} />
                                    <IconCard title="System Backup" icon={<MdBackup />}
                                        subItems={['System Backup', 'Database Backup']} />
                                    <IconCard title="Cache Clear" icon={<MdOutlineCleaningServices />} />

                                    <p className='font-open text-blue-500 text-[14px] font-bold mt-5 text-center'>Version 5.0.0</p>
                                </div>
                            </div>
                        )
                    }


                    <div className='w-auto md:w-10/12 flex items-center gap-x-200'>
                        <div className='hidden md:flex'>
                            <GiHamburgerMenu className='text-left inline w-4 h-5' />
                        </div>
                        <div className='hidden md:flex flex items-center gap-x-5'>
                            <Button text='View website' className='bg-blue-500' />
                            <div className='flex items-center'>
                                <IoNotifications />
                                <span className='bg-[#dc3545] text-white rounded-full py-[6px] px-[10px] text-[11px] '>145  </span>
                                <FaCaretDown />
                            </div>
                            <Image src={profil} className='w-10 h-10 rounded-full' />

                        </div>
                    </div>

                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar