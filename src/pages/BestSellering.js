import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/home/Footer';
import ProductCart from '../components/home/ProductCart'
import { serverProducts } from '../server';
import { productData } from '../static/data'
import Loader from './Loader';

function BestSellering(props) {



    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(false);
    const [searchParams, setsearchParams] = useSearchParams()
    const category = searchParams.get('category')

    const bestdealproduct = async () => {
        try {
            setloading(true)
            const { data, status } = await axios.get(`${serverProducts}/adminproducts`)
            if (status === 200) {
                setproduct(data.products)
                // if (category === null) {
                //     const sortData = data.productsgula.sort((a, b) => b.totalSell - a.totalSell)
                //     setproduct(sortData)
                // } else {
                //     const filterdata = data && data.productsgula.filter((i) => i.category === category)
                //     setproduct(filterdata)
                // }
                setloading(false)
            }
        } catch (error) {
            setloading(false)
            // toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get Unsuccessfull</p>, {theme : 'light'})
        }
    }


    useEffect(() => {
        bestdealproduct()
    }, []);
    return (
        <div className=' pt-8 mx-3 bg-gray-200'>
            {/* {loading && <Loader />} */}
            <div className='my-8 rounded-md grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-5 gap-x-4 gap-y-9 '>
                {
                    product && product !== '' && product.map((item , index) => {
                        return <ProductCart wbox={props.wbox} key={index} setwbox={props.setwbox} cbox={props.cbox} setcbox={props.setcbox} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default BestSellering