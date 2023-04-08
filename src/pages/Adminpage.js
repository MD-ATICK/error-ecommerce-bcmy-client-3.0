import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
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
import { serverShop } from '../server'
import Loader from './Loader';
import AdminDashLeft from './admin/AdminDashLeft';

function Adminpage() {

    const [data, setdata] = useState('');
    const [verified, setverified] = useState(false);
    const [loading, setloading] = useState(false);

    const addpage = async () => {
        try {
            const { data, status } = await axios.get(`${serverShop}/getsellers`)
            if (status === 200) {
                console.log(data)
                setdata(data)
            } else {
                console.log('I donot know')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const SetSellerClick = async (userid, useremail) => {
        setverified(true)
        try {
            setloading(true)
            const { data, status } = await axios.post(`${serverShop}/verifiedshop`, { id: userid, email: useremail }, { headers: { "Content-Type": "application/json" } })
            if (status === 201) {
                console.log(data)
                setloading(false)
                toast.success('Seller Verified SuccessFull')
                window.location.reload()
            }
        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }
    const UnsetSellerClick = async (userid, useremail) => {
        setverified(false)
        alert('are you unverifed this user from seller?')
        try {
            setloading(true)
            const { data, status } = await axios.post(`${serverShop}/disverifiedshop`, { id: userid, email: useremail }, { headers: { "Content-Type": "application/json" } })
            if (status === 201) {
                console.log(data)
                setloading(false)
                window.location.reload()
                toast.success('Seller Verified SuccessFull')
                window.location.reload()
            }
        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }


    useEffect(() => {
        addpage()
    }, []);

    return (
        <>
            {loading && <Loader />}
            <div className='gtap'>
                <div className='w-full flex items-center justify-center'>
                    <AdminDashLeft />
                </div>
                <div className='h-[83vh] w-full ml-auto bg-[#622d60]'>
                    {
                        data && data !== '' && data.sellers.length > 0 ? data && data !== '' && data.sellers.map((i) => {
                            const { name, email, user, address, phonenumber, avatar, _id, role } = i
                            return (
                                <section key={_id} className='bg-white text-black flex justify-between items-center p-3 px-10 rounded-lg m-6'>
                                    {/* <MdClose /> */}
                                    <div>
                                        <p className='text'>user : {user}</p>
                                        <p className='text'>Name : {name}</p>
                                        <p className='text'>Email : {email}</p>
                                        <p className='text'>Address : {address}</p>
                                        <p className='text'>Phone : {phonenumber}</p>

                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <img className='w-14 rounded-full shadow-lg object-cover my-4 h-14' src={avatar} alt="" />
                                        {
                                            role === 'seller' ? <button onClick={() => UnsetSellerClick(user, email)} className='cursor-pointer bg-[#622d60] py-3 px-8 tracking-wide text-[16px] text-white rounded-lg shadow-lg' > Cancel </button>
                                                : <button onClick={() => SetSellerClick(user, email)} className='cursor-pointer bg-green-700 py-3 px-8 tracking-wide text-[16px] text-white rounded-lg shadow-lg' > Verified </button>

                                        }
                                    </div>
                                </section>
                            )
                        }) : <p>No Seller Request</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Adminpage