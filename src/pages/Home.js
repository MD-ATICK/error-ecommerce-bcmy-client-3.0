import React  from 'react'
import Categorys from '../components/home/Categorys'
import Footer from '../components/home/Footer'
import Hero from '../components/home/Hero'
import Sponserd from '../components/home/Sponserd'
import BestSellering from './BestSellering'


function Home(props) {

    return (
        <div className='bg-gray-200'>
            <Hero />
            <Categorys />
            <div className=' pb-4 mt-6'>
                <h2 className='text-[35px] border-l-[6px] rounded-md  border-[#622d60] pl-3  text-stone-600 ml-8 font-[600]'>Best Selling</h2>
                <BestSellering cbox={props.cbox} setcbox={props.setcbox} wbox={props.wbox} setwbox={props.setwbox} />
            </div>
            <Sponserd />
            <Footer />
        </div>
    )
}

export default Home