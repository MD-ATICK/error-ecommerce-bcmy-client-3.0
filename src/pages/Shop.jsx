import React from 'react'
import ProductCart from '../components/home/ProductCart'
import { AiFillStar, AiOutlineUserAdd } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { FiBox, FiShoppingBag } from 'react-icons/fi'
import { serverShop } from '../server'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import Loader from './Loader'
import { useSelector } from 'react-redux'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { BsSuitHeartFill } from 'react-icons/bs'

function Shop() {

    const { id } = useParams()
    const [loading, setloading] = useState(false);
    const [shop, setshop] = useState('');
    const [activetab, setactivetab] = useState(1);
    const { user } = useSelector((state) => state.getuser)
    const [change, setchange] = useState(false);
    const [followck, setfollowck] = useState(true);
    const [followloading, setfollowloading] = useState(false);


    const ShopFetch = async () => {
        try {
            setloading(true)
            const { data, status } = await axios.get(`${serverShop}/shop/${id}`)
            if (status === 200) {
                setshop(data)
                setloading(false)
                console.log(data)
            }
        } catch (error) {
            setloading(false)
            toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get Unsuccessfull</p>, { theme: 'light' })
            console.log(error)
        }
    }



    const followClick = async () => {
        try {
            setfollowloading(true)
            const { data, status } = await axios.get(`${serverShop}/addfollow?id=${id}`, { withCredentials: true })
            if (status === 200) {
                setfollowck(true)
                setchange(!change)
                setfollowloading(false)
                console.log(data)
            }
        } catch (error) {
            setfollowloading(false)
            setfollowck(false)
            console.log(error)
        }
    }
    const unfollowClick = async () => {
        try {
            setfollowloading(true)
            const { data, status } = await axios.get(`${serverShop}/deletefollow?id=${id}`, { withCredentials: true })
            if (status === 200) {
                setfollowck(true)
                setchange(!change)
                setfollowloading(false)
                console.log(data)
            }
        } catch (error) {
            setfollowloading(false)
            setfollowck(false)
            console.log(error)
        }
    }

    const FollowFetch = async () => {
        try {
            setloading(true)
            const { data, status } = await axios.get(`${serverShop}/followck/${id}`, { withCredentials: true })
            if (status === 200) {
                if (data.followed === true) {
                    setfollowck(true)
                } else {
                    setfollowck(false)
                }
                setloading(false)
                console.log(data)
            }
        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        FollowFetch()
        ShopFetch()
    }, [change]);

    return (
        <div className='md:fullpagecover flex flex-col border-4 justify-center bg-[#e5e5e5]'>
            {
                loading && <Loader />
            }
            {
                shop && shop !== '' &&
                <div className='flex flex-col-reverse'>
                    <div className="left md:h-[100vh] py-6 gap-x-8 flex flex-col justify-center flex-[1]">
                        <div className='w-[350px] mb-6 mx-auto px-8 py-4 shadow-lg shadow-gray-300 rounded-md text-center overflow-scroll md:ml-10 h-full bg-white'>
                            <img src={shop.shop.avatar} className='h-[200px] rounded-full mx-auto mb-2  w-[200px] object-cover' alt="nai" />
                            <p>{shop.shop.name}</p>
                            <div className='flex gap-y-2 mt-3 items-center gap-x-3 justify-center'>
                                {
                                    followck ?
                                        <button className='bg-green-700 rounded-sm py-2 shadow-lg text-white w-[100px] flex items-center gap-x-1 justify-center text-center' onClick={unfollowClick} >{followloading ? 'loading...' : `UnFollow `}  </button> :
                                        <button className='bg-green-700 rounded-sm py-2 shadow-lg text-white w-[100px] flex items-center gap-x-1 justify-center text-center' onClick={followClick} > {followloading ? 'loading...' : `Follow `} </button>
                                }
                                <p className=' font-[500]'>{shop.shop.follow} follower</p>
                            </div>
                            <div className='flex flex-col gap-y-6 text-left mt-8'>
                                <div>
                                    <p className='text-lg font-[500] '>Address</p>
                                    <h2>{shop.shop.address}</h2>
                                </div>
                                <div>
                                    <p className='text-lg font-[500]'>Phone Number</p>
                                    <h2>{shop.shop.phoneNumber}</h2>
                                </div>
                                <div>
                                    <p className='text-lg font-[500]'>Total Products</p>
                                    <h2>{shop.allproduct.length}</h2>
                                </div>
                                <div>
                                    <p className='text-lg font-[500]'>Shop Ratings</p>
                                    <h2>4.3</h2>
                                </div>
                                <div>
                                    <p className='text-lg font-[500]'>Joined On</p>
                                    <h2>{shop.shop.createdAt}</h2>
                                </div>
                                {
                                    user && user !== '' && user.user.role !== 'user' ? <button className='bg-stone-700 rounded-sm py-2 shadow-lg text-white w-full mx-auto flex items-center gap-x-1 justify-center text-center'>Edit <AiOutlineUserAdd /></button> : null
                                }
                            </div>
                        </div>
                        <div>
                            <ul className='list-none flex justify-start flexcuse items-center md:w-[800px] gap-y-4 gap-x-10 bg-white px-20 shadow-lg shadow-zinc-300 py-3 md:mr-4 my-5'>
                                <li onClick={() => setactivetab(1)} className={activetab === 1 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><RxDashboard className='text-3xl' /> Shop Products</li>
                                <li onClick={() => setactivetab(2)} className={activetab === 2 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FiShoppingBag className='text-3xl' /> Running Events</li>
                                <li onClick={() => setactivetab(3)} className={activetab === 3 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FiBox className='text-3xl' />Shop Reviews</li>
                            </ul>
                            <div className='sobshow px-3 md:mr-4'>
                                {
                                    activetab === 1 ? <div className='grid grid-cols-2 w-full gap-4 place-items-center md:mr-3'>
                                        {
                                            shop.allproduct.map((i, index) => {
                                                return <ProductCart item={i} />
                                            })
                                        }
                                    </div> : null ||
                                        activetab === 2 ? <div>
                                        2
                                    </div> : null ||
                                        activetab === 3 ? <div>
                                        3
                                    </div> : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="right flex-[0.3] float-right">
                        <Link className='bg-stone-700 rounded-md py-3 text-right float-right m-6 block px-8 shadow-lg text-white' to='/dashboard'>Go to DashBoard</Link>
                    </div>
                </div>
            }
        </div>)
}

export default Shop