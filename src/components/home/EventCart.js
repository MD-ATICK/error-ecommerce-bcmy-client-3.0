import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight} from 'react-icons/bs'
import { GiSandsOfTime} from 'react-icons/gi'

function EventCart(props) {
    return (
        <div>
            <div className='bg-[#622d60] text-white max-w-[1200px] grid grid-cols-1 md:grid-cols-2 mx-auto py-8 mt-5 rounded-2xl shadow-lg'>
                <div className='left w-full h-full flex justify-center items-center'>
                    <img src={props.item.images[0].image} className='h-[300px] shadow-sm shadow-white rounded-xl' alt="" />
                </div>
                <div className="right p-5">
                    <h1 className='text-[25px] capitalize font-[500]'>{props.item.name}</h1>
                    <p className='text pt-6'>{props.item.description}</p>
                    <div className='flex justify-between'>
                        <div className='relative py-3'>
                            <p className="realp font-[500] text-[17px] line-through">{props.item.price}$</p>
                            <p className='text-[30px] text-cyan-300 '>{props.item.eventprice}$</p>
                        </div>
                        <p className='text-[23px] font-[600] text-green-500 tracking-wide'>120 sold</p>
                    </div>
                    {/* <h1 className='text-[17px] tracking-wide text-red-800 mt-4 flex items-center font-[400] gap-x-3'>Time's uping ...  <GiSandsOfTime className='text-[22px]'/></h1> */}
                    <div className='flex gap-x-4 py-4'>
                        <Link to={'/products'} className='text py-3 px-8 rounded-xl shadow-lg bg-zinc-600 text-white'>See Details</Link>
                        <Link to={'/products'} className='text py-3 px-8 rounded-xl shadow-lg bg-green-700 text-white'>Buy Now</Link>
                    </div>
                    <Link to='/offer-product' className='w-full flex gap-x-3 cursor-pointer justify-end items-center text-right pt-4 tracking-wide pr-4'>See More Event <BsArrowRight className='text-cyan-500 text-[20px] kf1'/></Link>
                </div>
            </div>
        </div>
    )
}

export default EventCart