import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineUserSwitch } from 'react-icons/ai'
import { server } from '../server';
import ProfileLeft from '../components/ProfileLeft';
import { useSelector } from 'react-redux';
import Loader from '../pages/Loader.js'
import { BiLogOut, BiMessageEdit, BiMessageSquareDetail } from 'react-icons/bi';
import { MdSpaceDashboard } from 'react-icons/md';
import {  RiUserHeartLine } from 'react-icons/ri';
import { SlArrowRight } from 'react-icons/sl';
import { CiBoxList, CiLogout } from 'react-icons/ci';
import { BsTruck } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { ImMap2 } from 'react-icons/im';

function Account(props) {

    const { user } = useSelector((state) => state.getuser)
    const [loading, setloading] = useState(false);
    const navigate = useNavigate()
    const [menu, setmenu] = useState(false);

    // const token = localStorage.getItem('token')

    const LogoutAccount = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        props.setdata(!props.data)
        props.setcbox(!props.cbox)
        props.setwbox(!props.wbox)
        navigate('/')
        // window.location.reload()
        // try {
        //     setloading(true)
        //     // const { data, status } = await axios.get(`${server}/logout`, { headers : { Authorization : `Bearer ${token}`}})
        //     setloading(false)
        //     if (data !== '' && status === 200) {
        //         props.setdata(!props.data)
        //         toast.success('User Logout succesfully')
        //         navigate('/')
        //         window.location.reload()
        //     } else {
        //         toast.error('Failed to resgister2')
        //     }
        // } catch (error) {
        //     toast.error('Failed to resgister 3')
        // }
    };

    return (
        <>
            {/* {loading && user === '' && <Loader />} */}
            <div>
                <div className='abcd relative flex items-center justify-center px-4'>
                    {/* <div className="left">
                        <ProfileLeft setdata={setdata} />
                    </div> */}
                    <div className={menu ? 'flex absolute top-0 left-[0px] duration-150' : 'flex absolute top-0 -left-[60px] duration-150'}>
                    <ul className='flex flex-col gap-y-3  items-center my-4 w-[55px] py-10 justify-between text-[#ffffff]  rounded-sm shadow-lg bg-stone-600'>
                        <li className='text'><NavLink to='/account' className='flex gap-x-4 items-center py-4'>
                            <AiOutlineUserSwitch className='text-2xl text-white font-bold' />
                            {/* <p>Profile</p> */}
                        </NavLink></li>
                        <li className='text'>  <NavLink to={'/orders'} className='flex gap-x-4 items-center py-4'>
                            <CiBoxList className='text-2xl font-bold' />
                            {/* <p>Orders</p> */}
                        </NavLink></li>
                        <li className='text'> <NavLink to={'/message'} className='flex gap-x-4 items-center py-4'>
                            <BiMessageEdit className='text-[23px] font-light' />
                            {/* <p className=''>Inbox</p> */}
                        </NavLink></li>
                        <li className='text'>  <NavLink to={'/track-order'} className='flex gap-x-4 items-center py-4'>
                            <BsTruck className='text-2xl font-bold' />
                            {/* <p>Track Order</p> */}
                        </NavLink></li>
                        <li className='text'> <NavLink to={'/payment'} className='flex gap-x-4 items-center py-4'>
                            <FaMoneyBillAlt className='text-2xl font-bold' />
                            {/* <p>Payment Methods</p> */}
                        </NavLink></li>
                        <li className='text'> <NavLink to={'/address'} className='flex gap-x-4 items-center py-4'>
                            <ImMap2 className='text-2xl text-white font-bold' />
                            {/* <p>Address</p> */}
                        </NavLink></li>
                        <li className='text'> <p className='flex gap-x-4   items-center rounded-md cursor-pointer' onClick={LogoutAccount} >
                            <CiLogout className='text-3xl font-bold text-[#00ddf6]' />
                            {/* <p> Log Out</p> */}
                        </p></li>
                    </ul>
                    <div>
                        <SlArrowRight onClick={() => setmenu(!menu)} className=' text-[#ffffff] rounded-md cursor-pointer text-md font-[400] mt-4 p-3 -ml-1 h-12 w-12 shadow-lg bg-stone-600'/>
                    </div>
                    </div>

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