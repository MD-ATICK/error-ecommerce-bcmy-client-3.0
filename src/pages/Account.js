import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'
import { server } from '../server';
import ProfileLeft from '../components/ProfileLeft';
import { useSelector } from 'react-redux';
import Loader from '../pages/Loader.js'
import { BiLogOut, BiMessageSquareDetail } from 'react-icons/bi';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiUserHeartLine } from 'react-icons/ri';

function Account({ setdata }) {

    const { user } = useSelector((state) => state.getuser)
    const [loading, setloading] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(1)
            setloading(true)
            console.log(2)
            const { data, status } = await axios.get(`${server}/logout`, { withCredentials: true })
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
            {/* {loading && user === '' && <Loader />} */}
            <div>
                <div className='abcd justify-center px-4'>
                    {/* <div className="left">
                        <ProfileLeft setdata={setdata} />
                    </div> */}
                    <ul className='flex items-center my-4 justify-around text-[#dadada] w-full rounded-lg shadow-lg bg-pink-700'>
                        <li className='text'><NavLink to='/account' className='flex gap-x-4 items-center py-4'>
                            <RiUserHeartLine className='text-2xl text-white font-bold' />
                            {/* <p>Profile</p> */}
                        </NavLink></li>
                        <li className='text'>  <NavLink to={'/orders'} className='flex gap-x-4 items-center py-4'>
                            <MdSpaceDashboard className='text-2xl font-bold' />
                            {/* <p>Orders</p> */}
                        </NavLink></li>
                        <li className='text'> <NavLink to={'/message'} className='flex gap-x-4 items-center py-4'>
                            <BiMessageSquareDetail className='text-[23px] font-light' />
                            {/* <p className=''>Inbox</p> */}
                        </NavLink></li>
                        <li className='text'>  <NavLink to={'/track-order'} className='flex gap-x-4 items-center py-4'>
                            <RiUserHeartLine className='text-2xl font-bold' />
                            {/* <p>Track Order</p> */}
                        </NavLink></li>
                        <li className='text'> <NavLink to={'/payment'} className='flex gap-x-4 items-center py-4'>
                            <RiUserHeartLine className='text-2xl font-bold' />
                            {/* <p>Payment Methods</p> */}
                        </NavLink></li>
                        <li className='text'> <NavLink to={'/address'} className='flex gap-x-4 items-center py-4'>
                            <RiUserHeartLine className='text-2xl font-bold' />
                            {/* <p>Address</p> */}
                        </NavLink></li>
                        <li className='text'> <p className='flex gap-x-4   items-center rounded-md cursor-pointer' onClick={handleSubmit} >
                            <BiLogOut className='text-2xl font-bold' />
                            {/* <p> Log Out</p> */}
                        </p></li>
                    </ul>
                    <div className="right mt-8 w-full flex flex-col items-center px-16 gap-y-2">
                        <img src={user !== '' ? user.user.avatar : ''} className='w-[200px] border-[4px] shadow-lg border-purple-500 h-[200px] rounded-full object-cover' alt="paunai" />

                        <div className='flex justify-between gap-y-3 gap-x-12'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Full Name</label>
                                <input className='shadow-lg' type="text" value={user !== '' ? user.user.name : ''} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Email Address</label>
                                <input type="text" value={user !== '' ? user.user.email : ''} />
                            </div>
                        </div>
                        <div className='flex justify-between gap-y-3 gap-x-12'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Phone</label>
                                <input type="text" value={'+88-01829-957-212'} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Zip Code</label>
                                <input type="text" value={'5963'} />
                            </div>
                        </div>
                        <div className='flex justify-between gap-y-3 gap-x-12'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Address 1</label>
                                <input type="text" value={'Lichubagan , Rungunia'} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Role</label>
                                <input type="text" value={user !== '' ? user.user.role : ''} />
                            </div>
                        </div>
                        <Link to={'/update-profile'} className='my-4 py-3 mx-2 px-6 rounded-md shadow-lg bg-purple-900 text-white'>Update Profile</Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Account