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
import { salesData, earningsData } from "../datas/chartData";
import { GrOrderedList } from 'react-icons/gr'



const Home = () => {
  return (
    <section>
      <Container>
        <Navbar />
        <Flex>
          <div className='w-2/12'></div>

          <div className='w-10/12 flex flex-col justify-center mx-8'>
            <div className=' w-auto bg-white shadow-sm my-5  '>
              <h1 className='text-[#575963] text-[17px] font-open px-3 py-4'>Dashboard</h1>
            </div>
            <div className='flex gap-x-4 gap-y-4 flex-wrap'>
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
                  color="#007bff" // Blue
                />
                <ChartCard
                  title="Monthly Earnings Report"
                  data={earningsData}
                  color="#ff4d6d" // Red
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