import React from 'react'
import Container from '../components/Container'
import Navbar from '../layouts/Navbar'
import Cart from '../components/Cart'
import Flex from '../components/Flex'
import CartTwo from '../components/CartTwo'
import CartThree from '../components/CartThree'
import CartFour from '../components/CartFour'


const Home = () => {
  return (
    <section>
        <Container>
            <Navbar/>
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

              </div>
            </Flex>

        </Container>
    </section>
  )
}

export default Home