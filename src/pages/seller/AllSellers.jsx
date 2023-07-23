import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { serverShop } from '../../server';
import { useSelector } from 'react-redux';
import Loader from '../Loader';

function AllSellers() {

    const token = localStorage.getItem('token')
    const { user } = useSelector((state) => state.getuser)
    const [seller, setseller] = useState('');
    const [loading, setloading] = useState(false);
    const [change, setchange] = useState(false);

    const FetchSeller = async () => {
        setloading(true)
        try {
            const { data, status } = await axios.get(`${serverShop}/getsellers`, { headers: { Authorization: token } })
            if (status === 200) {
                console.log(data)
                setloading(false)
                setseller(data.sellers)
            }
        } catch (error) {
            setloading(false)
            console.log('error')
        }
    }

    const verified = async (user) => {
        try {
            const { data, status } = await axios.get(`${serverShop}/verifiedshop/${user}`, { headers: { Authorization: token } })
            if (status === 200) {
                console.log(data)
                setchange(!change)
                // setseller(data.sellers)
            }
        } catch (error) {
            console.log('error')
        }
    }

    const Unverified = async (user) => {
        try {
            const { data, status } = await axios.get(`${serverShop}/disverifiedshop/${user}`, { headers: { Authorization: token } })
            if (status === 200) {
                console.log(data)
                setchange(!change)
                // setseller(data.sellers)
            }
        } catch (error) {
            console.log('error')
        }
    }

    useEffect(() => {
        FetchSeller()
    }, [change]);

    return (
        <>
            {
                loading && <Loader/>
            }
        <div className='flex flex-col gap-y-6 p-6'>
            {
                seller && seller !== '' && seller.map((i) => {
                    // user && user !== '' && console.log(user.user.id)
                    // console.log(i.user)
                    return (
                        <div key={i._id} className='flex p-4 rounded-lg bg-white justify-between items-center'>
                            <div className="left">
                                <p>{i.name}</p>
                                <p>{i.user}</p>
                                <p>{i.email}</p>
                                <p>{i.phoneNumber}</p>
                                <p>{i.address}</p>
                                <p>{i.createAt}</p>
                            </div>
                            <div className="right flex flex-col justify-center items-center">
                                <img className='rounded-full h-24 w-24 object-cover shadow-lg' src={i.avatar} alt="" />
                                <p className='pb-4 pt-1 font-[500] text-[16px] text-green-700'>{i.role} {user  !== '' && user.user._id === i.user ? ' (owner)' : null}</p>
                                <div className={user && user !== '' && user.user._id === i.user ? 'hidden' : 'flex items-center'}>
                                    <button className='bg-green-600 text-white py-2 px-4 cursor-pointer' onClick={() => Unverified(i.user)}>UnVerified</button>
                                    <button className='bg-[#622d60] text-white py-2 px-4 ml-6 cursor-pointer' onClick={() => verified(i.user)}>Verified</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default AllSellers