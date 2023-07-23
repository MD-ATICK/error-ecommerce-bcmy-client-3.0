import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
    return (
        <div>
            {/* <div className='bg-[#622d60] text-white'>
                <div className="max-w-[1300px] py-8 grid grid-cols-1 place-items-center md:grid-cols-2 mx-auto ">
                    <p className=' text-white text-[30px] font-[600] tracking-wide'><span className='text-sky-400 text-[35px]'>SubsCribe</span> Us For Get News <br /> Events And Offers..!!</p>
                    <div className='flex items-center'>
                        <input type="text" className='border-none w-[350px] text-black border-gray-700 py-2 px-4 shadow-lg rounded-md' placeholder='Enter Email' />
                        <button className='text-xl py-4 px-4 rounded-lg -m-2 shadow-lg bg-yellow-500 text-white'><GrSend className='text-white' /></button>
                    </div>
                </div>
            </div> */}
            <div className='w-full px-3 py-7 bg-stone-900 text-white'>
                <div className="max-w-[1300px] py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                    <div className='flex flex-col gap-y-3'>
                    <img className='h-auto w-[130px] py-2 px-5 rounded-md bg-white object-cover cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58ax9CjWFGeUhOsOsxNCxSavvimIL-v8OlA&usqp=CAU" alt="janin na" />
                        <p className='text-[13px] leading-[1.5rem] py-3 i text-gray-200 tracking-wider font-[400]' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit soluta ab magni laboriosam ipsum non!</p>
                        <div className='flex gap-x-3'>
                            <AiOutlineTwitter className='p-3 h-10 w-10 bg-white text-black rounded-md shadow-lg text-xl'/>
                            <AiOutlineTwitter className='p-3 h-10 w-10 bg-white text-black rounded-md shadow-lg text-xl'/>
                            <AiOutlineTwitter className='p-3 h-10 w-10 bg-white text-black rounded-md shadow-lg text-xl'/>
                            <AiOutlineTwitter className='p-3 h-10 w-10 bg-white text-black rounded-md shadow-lg text-xl'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h1>Company</h1>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>About us</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Careers</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Store Locations</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Our Blog</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Reviews</p>
                    </div>
                    <div className='flex flex-col gap-y-3' >
                        <h1>Shop</h1>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Game & Video</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Phone & Tablets</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Computers & Laptop</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Sport Watches</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Events</p>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h1>Support</h1>
                        <p className='text-[14px] text-stone-300 font-[400] tracking-wide'>FAQ</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Reviews</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Contact Us</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Shopping</p>
                        <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Live Chat</p>
                    </div>
                </div>
                <div className='mx-auto max-w-[1100px] flex justify-between'>
                    <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>&#169; Becodemy. All rights reserverd</p>
                    <p className='text-[14px] text-gray-200 font-[400] tracking-wide'>Tearms  &#x2022; Privacy Policy</p>
                    <div className='flex'>
                        <img src="" alt="one" />
                        <img src="" alt="one" />
                        <img src="" alt="three" />  
                        <img src="" alt="one" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer