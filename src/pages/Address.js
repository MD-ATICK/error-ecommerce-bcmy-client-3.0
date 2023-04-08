import React, { useState } from 'react'
import ProfileLeft from '../components/ProfileLeft'
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

function Address() {


  const [condition, setcondition] = useState('');
  const [address, setaddress] = useState('');
  const [cartcode, setcartcode] = useState('');
  const [show, setshow] = useState('');
  const [data, setdata] = useState([{
    condition: 'default',
    address: '494 Erdman Passage, New Zoletown, Paraquay',
    cartcode: '(213) 840-597'
  }]);


  const HandleSubmit= (e) => {
    e.preventDefault()
    setdata(olditems => [...olditems , {condition , address , cartcode}])
    setshow(false)
  }

  return (
    <div className='abc'>
      <div className={show ? 'wishlistbox flex justify-center items-center' : 'hidden'}>
        <div className='bg-[#622d60] h-[400px] overflow-y-hidden w-[450px] rounded-xl shadow-lg'>
          <form action="" className='flex flex-col p-8' onSubmit={HandleSubmit}>
            <div className='flex items-center justify-between pb-4'>
              <h1 className='text-2xl font-[600] text-white tracking-wide'>My Address</h1>
              <AiOutlineClose className='text-2xl cursor-pointer' onClick={() => setshow(false)} />
            </div>
            <input type="text" value={cartcode} onChange={(e) => setcartcode(e.target.value)} className='py-3 px-6 rounded-[35px] border-[2px] border-[#622d60] bg-white tracking-wide text-black text-[16px mb-6 shadow-lg' placeholder='Enter Code' />
            <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} className='py-3 px-6 rounded-[35px] border-[2px] border-[#622d60] bg-white tracking-wide text-black text-[16px mb-6 shadow-lg' placeholder='Enter Text' />
            <input type="text" value={condition} onChange={(e) => setcondition(e.target.value)} className='py-3 px-6 rounded-[35px] border-[2px] border-[#622d60] bg-white tracking-wide text-black text-[16px mb-6 shadow-lg' placeholder='Enter Condition' />
            <button type='submit' className='my-4 py-3 mx-2 px-8 rounded-xl font-[500] shadow-lg w-[200px] bg-white text-[#622d60]'>Add Now</button>
          </form>
        </div>
      </div>
      <div className="left w-full">
        <ProfileLeft />
      </div>
      <div className="right h-[83vh] w-full ">
        <div className="flex mx-10 items-center justify-between mb-4">
          <h1 className='text-2xl pl-4 font-[600] text-stone-600 tracking-wide'>My Address</h1>
          <button className='my-4 py-3 mx-2 px-6 rounded-xl shadow-lg bg-[#622d60] text-white' onClick={() => setshow(true)}>Add Now</button>
        </div>
        <div className='mx-10'>
          {
            data && data !== '' && data.map((i) => {
              return (
                <div className="flex justify-between bg-[#622d60] mb-4 rounded-lg py-4 text-white items-center px-8">
                  <h1 className='text-[16px] tracking-wide'>{i.condition}</h1>
                  <h1 className='text-[16px] tracking-wide'>{i.address}</h1>
                  <h1 className='text-[16px] tracking-wide'>{i.cartcode}</h1>
                  <button> <AiOutlineDelete className='text-2xl font-bold' /> </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Address