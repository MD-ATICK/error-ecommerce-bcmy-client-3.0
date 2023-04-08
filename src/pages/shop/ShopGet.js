import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverProducts, serverShop } from '../../server';
import Loader from '../Loader';
import ProductCart from '../../components/home/ProductCart';

function ShopGet() {

  const { id } = useParams()
  const [loading, setloading] = useState(false);
  const [shop, setshop] = useState('');
  const [followck, setfollowck] = useState(true);
  const [extra, setextra] = useState(false);
  
const [followloading, setfollowloading] = useState(false);

  const toastinfo = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  }

  const SellerProducts = async () => {
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
      toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get Unsuccessfull</p>, toastinfo)
      console.log(error)
    }
  }

  const followClick = async () => {
    try {
      setfollowloading(true)
      const { data, status } = await axios.get(`${serverShop}/addfollow?id=${id}`, { withCredentials: true })
      if (status === 200) {
        setfollowck(true)
        setextra(!extra)
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
        setextra(!extra )
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
        if(data.followed === true){
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
    SellerProducts()
    FollowFetch()
  }, [extra]);

  return (
    <div className='bg-gray-200 w-full'>
      {loading && <Loader />}
      <div className='max-w-[1200px] mx-auto p-6'>
        {/* All work done now only UI make korte hobe  <-- */}
        {
          shop && shop !== '' && <div className='grid grid-cols-1 py-14 place-items-center lg:grid-cols-2'>
            <div>
              <p className='flex items-center gap-x-3 text-[17px] pb-4 font-[500] tracking-wide'>Shop Name  <span className='bg-[#622d60] py-3 px-6 text-white rounded-full shadow-lg w-[400px] text mb-3 ml-14'>{shop.shop.name}</span></p>
              <p className='flex items-center gap-x-3 text-[17px] pb-4 font-[500] tracking-wide'>Phone No  <span className='bg-[#622d60] py-3 px-6 text-white rounded-full shadow-lg w-[400px] text mb-3 ml-14'>{shop.shop.phoneNumber}</span></p>
              <p className='flex items-center gap-x-3 text-[17px] pb-4 font-[500] tracking-wide'>Address  <span className='bg-[#622d60] py-3 px-6 text-white rounded-full shadow-lg w-[400px] text mb-3 ml-14'>{shop.shop.address}</span></p>
              <p className='flex items-center gap-x-3 text-[17px] pb-4 font-[500] tracking-wide'>Zip Code  <span className='bg-[#622d60] py-3 px-6 text-white rounded-full shadow-lg w-[400px] text mb-3 ml-14'>{shop.shop.zipCode}</span></p>
              <p className='flex items-center gap-x-3 text-[17px] pb-4 font-[500] tracking-wide'>Description <span className='bg-[#622d60] py-3 px-6 text-white rounded-full shadow-lg w-[400px] text mb-3 ml-14'>{shop.shop.description}</span></p>
            </div>
            <div className='flex flex-col items-center gap-x-3 justify-center 4tems-center w-full'>
              <img src={shop.shop.avatar} alt="" className='w-[300px] h-[300px] object-cover shadow-lg rounded-3xl' />
              <p className='mb-4 text-[14px] font-[600]'>{shop.shop.follow} <span className='font-[400]'> Follower</span></p>
              {
                followck ? 
                <button className='cursor-pointer mx-10 mt-3 bg-[#622d60] py-3 px-8 tracking-wide text-[16px] text-white rounded-lg shadow-lg' onClick={unfollowClick} >{ followloading ? 'loading...' : 'Unfollow'}  </button> : 
                <button className='cursor-pointer mx-10 mt-3 bg-green-700 py-3 px-8 tracking-wide text-[16px] text-white rounded-lg shadow-lg' onClick={followClick} > { followloading ? 'loading...' : 'follow'} </button> 
              }
            </div>
          </div>
        }
        <div>
          <h1 className='text-4xl px-3 font-bold mt-5 tracking-wide'>All Products</h1>
          <div>
            <div className='mt-8 rounded-md grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-2 border-4 gap-x-4 gap-y-9 '>
              {
                shop && shop !== '' && shop.allproduct.map((item, index) => {
                  return <ProductCart item={item} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopGet