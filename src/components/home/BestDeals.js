import React, { useEffect, useState } from 'react'
import { productData } from '../../static/data';
import ProductCart from './ProductCart';

function BestDeals() {

    const [data, setdata] = useState('');
    // console.log(data)

    useEffect(() => {
        const s = productData && productData.sort((a, b) => b.total_sell - a.total_sell)
        const d = s.slice(0, 10)
        setdata(d)
    }, []);
    return (
        <div className='pb-8'>                                                                                                                                                                      
            <div className=' max-w-[1450px] mx-auto pt-6'>
                <h1 className=' text-3xl font-[600] tracking-wide border-l-[5px] py-1 border-l-purple-800 pl-3'>Best Deals 10 Products</h1>
                <div className='mt-8 rounded-md shadow-lg grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-5 gap-x-4 gap-y-9 '>
                    {
                        data && data.map((item, index) => {
                            return <ProductCart item = { item } key = { index } />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BestDeals