import React from 'react'
import { productData } from '../../static/data'
import ProductCart from './ProductCart';

function FuturedProduct() {
    const data = productData.slice(0 , 15)
    return (
        <div className='py-9'>
            <div className='max-w-[1450px] mx-auto'>
                <h1 className=' text-3xl font-[600] tracking-wide border-l-[5px] py-1 border-l-purple-800 pl-3'>Futured - Top 30 Products</h1>
                <div className='mt-8 rounded-md grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-5 gap-x-4 gap-y-9 '>
                    {
                        data && data.map((item, index) => {
                            return <ProductCart item={item} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FuturedProduct