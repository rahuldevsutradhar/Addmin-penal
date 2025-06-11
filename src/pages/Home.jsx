import React from 'react'
import Container from '../components/Container'
import Navbar from '../layouts/Navbar'
import Cart from '../components/Cart'
import Flex from '../components/Flex'
import Title from '../components/Title'
import OrderList from '../components/OrderList'
import CartTwo from '../components/CartTwo'
import CartThree from '../components/CartThree'
import CartFour from '../components/CartFour'
import ChartCard from '../components/ChartCard'
import IconCard from '../components/IconCard'
import Image from '../components/Image'
import { salesData, earningsData } from "../datas/chartData";
import { GrOrderedList } from 'react-icons/gr'
import { FaBook, FaExchangeAlt, FaFirstOrder, FaHome, FaList, FaProductHunt, FaQuestionCircle, FaTelegramPlane, FaUser, FaWifi } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import profil from '../assets/profil.jpg'
import { CgWebsite } from 'react-icons/cg'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BiSolidMessageRounded } from 'react-icons/bi'
import { MdBackup, MdOutlineCleaningServices, MdOutlineManageSearch } from 'react-icons/md'



const Home = () => {
  return (
    <section>
      <Container>
        <Navbar />
        <Flex>
          <div className='w-2/12'>
          <Link to={'/profil'}>
          <div className='hidden md:flex flex tiems-center gap-x-2 mx-2 my-6 '>
             <Image src={profil} className='w-10 h-10 rounded-full'/>
             <div className='font-open text-[#777] text-[11px] pb-2 '>
              <p>Admin</p>
              <p>Administator</p>
             </div>
          </div>
          </Link>


         <Flex className='hidden md:block gap-y-2 flex-col'>
           <IconCard title='Dashbord' icon={<FaHome />}  to='/'/>
           <IconCard title="Manage Categories" icon={<FaList />} 
           subItems={["Categories", "Sub categories", "Child categories"]}/>
           <IconCard title="Manage Reels" icon={<FaList />} 
           subItems={["Reels", "Reels List"]}/>
           <IconCard title="Manage Product" icon={<FaProductHunt />} 
           subItems={['Brands',' Add Product' ,'All Products', 'Stock Out Products',
                     'Campaign Offer', 'CSV Import & Export', 'Product Reviews',
                     'Manage Orders']}/>
           <IconCard title="Manage order" icon={<FaFirstOrder />} 
           subItems={['All Orders',' Pending Orders' ,'Progress Orders', 'Delivered Orders', 'Canceled Orders', 'Transactions']}/>
           <IconCard title='Transactions' icon={<FaExchangeAlt />}  to='/'/>
           <IconCard title="Ecommerce" icon={<CgWebsite />} 
           subItems={['Set Coupons','Shipping' ,'State Tax', 'Tax', 'Currency', 'Payment','Customer List']}/>
           <IconCard title='Customers List' icon={<FaPeopleGroup />}  to='/'/>
           <IconCard title='Manage Tickets' icon={<BiSolidMessageRounded />}  to='/'/>
           <IconCard title="Manage Site" icon={<MdOutlineManageSearch />} 
           subItems={['General Settings','Courier API' ,'Home Page', 'Sliders', 'Services', 'Visibility','Social Login','Email Settings','SMS Settings','Announcement','Cookies Alert','Maintainance','Sitemap','Language','Manage Faqs']}/>
           <IconCard title="Manage Faqs" icon={<FaQuestionCircle />} 
           subItems={['Categories','Faqs' ]}/>
           <IconCard title="Manage Blogs" icon={<FaWifi />} 
           subItems={['Categories','Blogs' ]}/>
           <IconCard title='Manage Pages' icon={<FaBook />}  to='/'/>
           <IconCard title='Subscribers List' icon={<FaTelegramPlane />}  to='/'/>
           <IconCard title="System User" icon={<FaUser />} 
           subItems={['System User','Role' ]}/>
           <IconCard title="System Backup" icon={<MdBackup />} 
           subItems={['System Backup','Database Backup' ]}/>
           <IconCard title="Cache Clear" icon={<MdOutlineCleaningServices />} />
           
            <p className='font-open text-blue-500 text-[14px] font-bold mt-5 text-center'>'Version 5.0.0'</p>
         </Flex>
        
          
          </div>

          <div className='w-10/12 flex flex-col justify-center mx-8'>
            <div className=' w-auto bg-white shadow-sm my-5  '>
              <h1 className='text-[#575963] text-[17px] font-open px-3 py-4'>Dashboard</h1>
            </div>
            <div className='flex gap-x-2 md:gap-x-4 gap-y-4 flex-wrap'>
              <Cart text='Total Order' number='0' />
              <Cart text='Total Order' number='0' />
              <Cart text='Total Order' number='0' />
              <Cart text='Total Order' number='0' />
              <CartTwo text='Total Order' number='0' />
              <CartTwo text='Total Order' number='0' />
              <CartTwo text='Total Order' number='0' />
              <CartTwo text='Total Order' number='0' />
              <CartThree text='Total Order' number='0' />
              <CartThree text='Total Order' number='0' />
              <CartThree text='Total Order' number='0' />
              <CartThree text='Total Order' number='0' />
              <CartFour text='Total Order' number='0' />
              <CartFour text='Total Order' number='0' />
              <CartFour text='Total Order' number='0' />
              <CartFour text='Total Order' number='0' />
              <CartFour text='Total Order' number='0' />
            </div>

            <div className="p-6 bg-white ">
              <div className="flex flex-col md:flex-row gap-6">
                <ChartCard
                  title="Monthly Product Sales Report"
                  data={salesData}
                  color="#007bff" 
                />
                <ChartCard
                  title="Monthly Earnings Report"
                  data={earningsData}
                  color="#ff4d6d"
                />
              </div>
            </div>
            
            <div className='mb-[50px]'>
              <Title text='Recent Orders' className='text-[#575963] text-[17px] font-open px-3 py-4 shadow-md mb-4'/>

              <OrderList/>
            </div>

          </div>
        </Flex>
          

      </Container>
    </section>
  )
}

export default Home