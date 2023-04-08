import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Footer from '../components/home/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCart from '../components/home/ProductCart';
import { serverProducts } from '../server';
import Loader from './Loader';

function Products(props) {

    props.wbox === true ? console.log(true) : console.log(false)


    const [searchParams, setsearchParams] = useSearchParams()
    const category = searchParams.get('category')
    const [product, setproduct] = useState('');
    const [loading, setloading] = useState(false);

    const toastinfo = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    }


    const SellerProducts = async () => {
        try {
            setloading(true)
            const { data, status } = await axios.get(`${serverProducts}/adminproducts`, { withCredentials: true })
            if (status === 200) {
                if (category === null) {
                    setproduct(data)
                } else {
                    const filterdata = data && data.filter((i) => i.category === category)
                    setproduct(filterdata)
                }
                setloading(false)
                console.log(data)
            }
        } catch (error) {
            setloading(false)
            toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get Unsuccessfull</p>, toastinfo)
            console.log(error)
        }
    }

    useEffect(() => {
        SellerProducts()
    }, [category])
    return (
        <>
            {loading && <Loader />}
            <div className='px-10 pt-3 pb-14 min-h-[83vh] bg-gray-200'>
                {
                    product && product !== '' && product.productsgula.length !== 0 ? <div className='mt-8 rounded-md grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-5 gap-x-4 gap-y-9 '>
                        {
                            product && product !== '' && product.productsgula.map((item, index) => {
                                return <ProductCart wbox={props.wbox} setwbox={props.setwbox} cbox={props.cbox} setcbox={props.setcbox} item={item} key={index} />
                            })
                        }
                    </div> : <p className='w-full flex justify-center items-center h-[79.5vh] tracking-wide border-4  '>No Product Found</p>
                }
            </div>
            <Footer />
        </>
    )
}

export default Products