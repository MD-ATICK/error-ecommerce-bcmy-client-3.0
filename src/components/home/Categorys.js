import React from 'react'
import { Link } from 'react-router-dom'
import { brandingData, categoriesData } from '../../static/data'

function Categorys() {
  return (
    <div className='py-10'>
        <div className='p-4 max-w-[1300px] rounded-md shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 mx-3 md:mx-auto '>
            {
                brandingData && brandingData.map((item , index) => {
                    return (
                        <div className='flex flex-col hover:shadow-lg duration-150  bg-white h-[170px] p-4 rounded-lg' key={index}>
                            <p className='h-[40px] mt-2 w-[40px] mx-auto'>{item.icon}</p>
                            <div className="px-3">
                                <h3 className='text-[15px] text-[#bc5b01] pt-3 tracking-wide'>{item.title}</h3>
                                <p className='text-[14px] leading-6 pt-1'>{item.Description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='mt-8 p-9 grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-5 gap-x-16 gap-y-9 rounded-md shadow-lg bg-white max-w-[1300px] mx-auto'>
           {
            categoriesData && categoriesData.map((item , index) => {
                return (
                    <Link to={`/products/?category=${item.title}`} className='w-full hover:bg-gray-200 rounded-md p-2 h-[100px] flex items-center justify-between cursor-pointer overflow-hidden' key={index}>
                        <h1 className='w-1/2 mr-2'>{item.title}</h1>
                        <img src={item.image_Url} className='w-[100px] object-cover' alt="" />
                    </Link>
                )
            })
           }
        </div>
    </div>
  )
}

export default Categorys