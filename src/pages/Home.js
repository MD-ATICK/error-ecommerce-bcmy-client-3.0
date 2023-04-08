import React , {useEffect , useState} from 'react'
import { useDispatch } from 'react-redux'
import Categorys from '../components/home/Categorys'
import Event from '../components/home/Event'
import Footer from '../components/home/Footer'
import FuturedProduct from '../components/home/FuturedProduct'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Sponserd from '../components/home/Sponserd'
import { getUserFetch } from '../UserSlice/UserSlice'
import BestSellering from './BestSellering'


function Home(props) {

    // const [p, setp] = useState(false);
    props.wbox === true ? console.log(true) : console.log(false)
  
    // useEffect(() => {
    //     setp(!p)
    // }, [props.wbox]);

    return (
        <div className='bg-gray-200'>
            {/* <Header/> */}
            <Hero />
            <Categorys />
            {/* <Event /> */}
            <div className=' pb-4 mt-6'>
                <h2 className='text-[35px] border-l-[6px] rounded-md  border-[#622d60] pl-3  text-stone-600 ml-8 font-[600]'>Best Selling</h2>
                <BestSellering wbox={props.wbox} setwbox={props.setwbox} />
            </div>
            {/* <FuturedProduct /> */}
            <Sponserd />
            <Footer />
        </div>
    )
}

export default Home