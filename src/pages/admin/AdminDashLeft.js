import React from 'react'
import { RiUserHeartLine } from 'react-icons/ri';
import { useNavigate, NavLink } from 'react-router-dom';
import { RiMoneyPoundCircleLine } from 'react-icons/ri'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { FaRegAddressBook } from 'react-icons/fa'
import { GiApothecary } from 'react-icons/gi'
import { MdSpaceDashboard } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { VscNewFolder } from 'react-icons/vsc'
import { BiLogOut } from 'react-icons/bi'

function AdminDashLeft() {
    return (
        <nav className='py-6 px-8 flex flex-col justify-between mx-10 w-full h-[78vh] naving text-white rounded-lg '>
            <NavLink to='/account' className='flex gap-x-4 items-center'>
                <RxDashboard className='text-2xl font-bold' />
                <p >Admin DashBoard</p>
            </NavLink>
            <NavLink to='/account' className='flex gap-x-4 items-center'>
                <RiUserHeartLine className='text-2xl font-bold' />
                <p >All Orders</p>
            </NavLink>
            <NavLink to='/admin/products' className='flex gap-x-4 items-center'>
                <RiUserHeartLine className='text-2xl font-bold' />
                <p >All Products</p>
            </NavLink>
            <NavLink to='/admin/create-product' className='flex gap-x-4 items-center'>
                <VscNewFolder className='text-2xl font-bold' />
                <p >Create Product</p>
            </NavLink>
            <NavLink to={'/admin/users'} className='flex gap-x-4 items-center'>
                <RiMoneyPoundCircleLine className='text-2xl font-bold' />
                <p className=''>All Users</p>
            </NavLink>
            <NavLink to={'/orders'} className='flex gap-x-4 items-center'>
                <MdSpaceDashboard className='text-2xl font-bold' />
                <p>All Events</p>
            </NavLink>
            <NavLink to={'/refunds'} className='flex gap-x-4 items-center'>
                <AiOutlineFileAdd className='text-2xl font-bold' />
                <p>Create Events</p>
            </NavLink>
            <NavLink to={'/track-order'} className='flex gap-x-4 items-center'>
                <BiMessageSquareDetail className='text-2xl font-bold' />
                <p>Shop Inbox</p>
            </NavLink>
            <NavLink to={'/payment'} className='flex gap-x-4 items-center'>
                <RiMoneyPoundCircleLine className='text-2xl font-bold' />
                <p>Discount Codes</p>
            </NavLink>

            {/* <p className='flex gap-x-4 text-red-600 items-center py-4 cursor-pointer' >
                            <BiLogOut className='text-2xl font-bold' />
                            <p> Log Out</p>
                        </p> */}
        </nav>
    )
}

export default AdminDashLeft