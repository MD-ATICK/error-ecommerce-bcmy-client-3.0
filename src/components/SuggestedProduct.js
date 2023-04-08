import React from 'react'
import ProductCart from './home/ProductCart'

function SuggestedProduct(props) {

    const d = props.data.productsgula && props.data.productsgula.filter((i) => i.category === props.category)

    return (
        <div className='py-9 bg-gray-200'>
            <div className='max-w-[1300px] mx-auto'>
                <h1 className=' text-3xl font-[600] tracking-wide border-l-[5px] py-1 border-l-purple-800 pl-3'>{`Related Products (${d.length})`}</h1>
                <div className='mt-8 rounded-md grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-3 gap-x-6 gap-y-9 '>
                    {
                        d && d.map((item, index) => {
                            return <ProductCart item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SuggestedProduct