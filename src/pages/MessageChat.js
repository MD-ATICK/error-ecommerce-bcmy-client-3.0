import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import ProfileLeft from '../components/ProfileLeft'

function MessageChat() {

    const { loading, user } = useSelector((state) => state.getuser)
    const [message, setmessage] = useState('');
    const [msgbox, setmsgbox] = useState([]);

    const Handleclick = (e) => {
        e.preventDefault()
        if(message.length < 1){
            return;
        }
        toast.success('Sent A message To Owner')
        setmsgbox(oldlist => [...oldlist, { message }])
        setmessage('')
    }


    console.log(msgbox)
    return (
        <div className='abc'>
            <div className="left w-full">
                <ProfileLeft />
            </div>
            <div className="right relative h-[83vh] border-4 w-full">
                {/* <p>atickvai</p> */}
                <div className='absolute right-6 flex flex-col items-center justify-center gap-3 top-5'>
                    {
                        msgbox.map((i) => {
                            const { message } = i
                            return (
                                <div className='flex items-end'>
                                    <div className=' bg-[#622d60] py-3 px-6 tracking-wide text-[14px] rounded-tr-2xl rounded-bl-2xl text-white'>{message}</div>
                                    <img src={user !== '' ? user.user.avatar : ''} className='w-[35px] ml-2 border-[3.5px] shadow-lg border-green-600 h-[35px] rounded-full object-cover' alt="paunai" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='absolute bottom-3 left-10'>
                    <form action="" onSubmit={Handleclick}>
                        <input type="text" placeholder='Aa' className='inputmsg' value={message} onChange={(e) => setmessage(e.target.value)} />
                        <button className='my-4 py-3 mx-2 px-6 rounded-xl shadow-lg bg-[#622d60] text-white' type='submit' >Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageChat