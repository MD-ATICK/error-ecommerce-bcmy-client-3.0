import axios from 'axios'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { serverEvents } from '../../server'
import EventCart from './EventCart'

function Event() {

    const allevents = async () => {
        toast.success('Create Event Button' , {theme :'light'})
        try {
            const { data , status } = await axios.get(`${serverEvents}/events` , { withCredentials : true } )
            if(status === 200){
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        allevents()
    }, []);

    return (
        <div className='py-10'>
            <div className='max-w-[1300px] mx-auto'>
                <h1 className=' text-3xl font-[600] tracking-wide border-l-[5px] py-1 border-l-purple-800 pl-3'>Best Deals</h1>
                <div className='w-full pt-4 grid'>
                    <EventCart img={'https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg'} />
                </div>
            </div>
        </div>
    )
}

export default Event