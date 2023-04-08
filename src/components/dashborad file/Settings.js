import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'

function Settings() {
    return (
        <div className='w-full h-[93vh] bg-white flex'>
            <div className='flex-[0.4] p-4 border-r-2 border-stone-400'>
                <h1 className='text-[22px] md:text-[30px] pt-8 pb-4 font-[600] flex items-center text-center gap-x-3 text-stone-500'><AiOutlineSetting className='text-5xl' /> Settings</h1>
                <div>
                    <ul className='list-none flex flex-col gap-y-6'>
                        <li className='border-b-[1px] text-[16px] cursor-pointer tracking-wide border-stone-600 pl-3 pb-1'>theme</li>
                        <li className='text-[16px] cursor-pointer tracking-wide'>color</li>
                        <li className='text-[16px] cursor-pointer tracking-wide'>font</li>
                        <li className='text-[16px] cursor-pointer tracking-wide'>letter</li>
                        <li className='text-[16px] cursor-pointer tracking-wide'>display</li>
                        <li className='text-[16px] cursor-pointer tracking-wide'>background</li>
                        <li className='text-[16px] cursor-pointer tracking-wide'>wallpaper</li>
                    </ul>
                </div>
            </div>
            <div className='flex-[0.7] p-6'>
                left
            </div>
        </div>
    )
}

export default Settings