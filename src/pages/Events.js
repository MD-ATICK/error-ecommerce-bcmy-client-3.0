import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { toast } from 'react-toastify'
import EventCart from '../components/home/EventCart'
import { serverEvents } from '../server'

function Events() {

  const [event, setevent] = useState('');

  const allevents = async () => {
    toast.success('Create Event Button', { theme: 'light' })
    try {
      const { data, status } = await axios.get(`${serverEvents}/events`)
      if (status === 200) {
        console.log(data)
        setevent(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    allevents()
  }, []);


  return (
    <div className='py-1'>
      <div className='max-w-[1300px] mx-auto'>
        <div className='w-full grid pb-10'>
          {
            event && event !== '' && event.events.map((i) => {
             return <EventCart item={i} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Events