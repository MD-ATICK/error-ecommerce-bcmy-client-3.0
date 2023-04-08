import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiUserHeartLine } from 'react-icons/ri';
import {  NavLink } from 'react-router-dom';
import { RiMoneyPoundCircleLine } from 'react-icons/ri'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaRegAddressBook } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { VscNewFolder } from 'react-icons/vsc'


function SellerDashLeft() {
    return (
        <nav className='py-6 px-8 flex flex-col justify-between mx-10 w-full h-[78vh] naving text-white rounded-lg '>
            <NavLink to='/shop-dashboard' className='flex gap-x-4 items-center'>
                <RxDashboard className='text-2xl font-bold' />
                <p >Seller DashBoard</p>
            </NavLink>
            <NavLink to='/account' className='flex gap-x-4 items-center'>
                <RiUserHeartLine className='text-2xl font-bold' />
                <p >My All Orders</p>
            </NavLink>
            <NavLink to='/seller/products' className='flex gap-x-4 items-center'>
                <RiUserHeartLine className='text-2xl font-bold' />
                <p >My All Products</p>
            </NavLink>
            <NavLink to='/seller/create-product' className='flex gap-x-4 items-center'>
                <VscNewFolder className='text-2xl font-bold' />
                <p >Create Product</p>
            </NavLink>
            <NavLink to={'/orders'} className='flex gap-x-4 items-center'>
                <MdSpaceDashboard className='text-2xl font-bold' />
                <p>My All Events</p>
            </NavLink>
            <NavLink to={'/refunds'} className='flex gap-x-4 items-center'>
                <AiOutlineFileAdd className='text-2xl font-bold' />
                <p>Create Events</p>
            </NavLink>
            {/* <NavLink to={'/message'} className='flex gap-x-4 items-center'>
        <RiMoneyPoundCircleLine className='text-2xl font-bold' />
        <p className=''>Withdraw Money</p>
    </NavLink> */}
            <NavLink to={'/track-order'} className='flex gap-x-4 items-center'>
                <BiMessageSquareDetail className='text-2xl font-bold' />
                <p>Costomer Inbox</p>
            </NavLink>
            <NavLink to={'/payment'} className='flex gap-x-4 items-center'>
                <RiMoneyPoundCircleLine className='text-2xl font-bold' />
                <p>Discount Codes</p>
            </NavLink>
            <NavLink to={'/address'} className='flex gap-x-4 items-center'>
                <FaRegAddressBook className='text-2xl font-bold' />
                <p>Refunds</p>
            </NavLink>
            {/* <p className='flex gap-x-4 text-red-600 items-center py-4 cursor-pointer' >
        <BiLogOut className='text-2xl font-bold' />
        <p> Log Out</p>
    </p> */}
        </nav>
    )
}

export default SellerDashLeft