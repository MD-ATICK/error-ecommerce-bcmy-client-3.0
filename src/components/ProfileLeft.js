import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { RiUserHeartLine } from 'react-icons/ri'
import { RiMoneyPoundCircleLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { FaRegAddressBook } from 'react-icons/fa'
import { GiApothecary } from 'react-icons/gi'
import { MdSpaceDashboard } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BiLogOut } from 'react-icons/bi'
import axios from 'axios';
import Loader from '../pages/Loader.js'
import { server, serverShop } from '../server';
import { toast } from 'react-hot-toast';

function ProfileLeft({ setdata }) {

    const navigate = useNavigate()
    const [loading, setloading] = useState(false);
    const token = localStorage.getItem('token')
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(1)
            setloading(true)
            console.log(2)
            const { data, status } = await axios.get(`${server}/logout`, { headers : { Authorization : `Bearer ${token}`}})
            setloading(false)
            console.log(3)
            if (data !== '' && status === 200) {
                setdata(false)
                console.log(data)
                toast.success('User Logout succesfully')
                navigate('/')
                console.log(4)
                window.location.reload()
            } else {
                console.log(5)
                toast.error('Failed to resgister2')
            }
        } catch (error) {
            toast.error('Failed to resgister 3')
            console.log(error.response)
        }
    };

    return (
        <>
            {loading && <Loader />}
            <nav className='py-8 px-10 ml-20 naving text-white rounded-md '>
                <NavLink to='/account' className='flex gap-x-4 items-center py-4'>
                    <RiUserHeartLine className='text-2xl font-bold' />
                    {/* <p>Profile</p> */}
                </NavLink>
                <NavLink to={'/orders'} className='flex gap-x-4 items-center py-4'>
                    <MdSpaceDashboard className='text-2xl font-bold' />
                    {/* <p>Orders</p> */}
                </NavLink>
                <NavLink to={'/refunds'} className='flex gap-x-4 items-center py-4'>
                    <RiArrowGoBackLine className='text-2xl font-bold' />
                    {/* <p>Refunds</p> */}
                </NavLink>
                <NavLink to={'/message'} className='flex gap-x-4 items-center py-4'>
                    <BiMessageSquareDetail className='text-[23px] font-light' />
                    {/* <p className=''>Inbox</p> */}
                </NavLink>
                <NavLink to={'/track-order'} className='flex gap-x-4 items-center py-4'>
                <RiUserHeartLine className='text-2xl font-bold' />
                    {/* <p>Track Order</p> */}
                </NavLink>
                <NavLink to={'/payment'} className='flex gap-x-4 items-center py-4'>
                <RiUserHeartLine className='text-2xl font-bold' />
                    {/* <p>Payment Methods</p> */}
                </NavLink>
                <NavLink to={'/address'} className='flex gap-x-4 items-center py-4'>
                <RiUserHeartLine className='text-2xl font-bold' />
                    {/* <p>Address</p> */}
                </NavLink>
                <p className='flex gap-x-4 text-pink-600  items-center mt-4 rounded-md cursor-pointer' onClick={handleSubmit} >
                    <BiLogOut className='text-2xl font-bold' />
                    {/* <p> Log Out</p> */}
                </p>
            </nav>
        </>
    )
}

export default ProfileLeft