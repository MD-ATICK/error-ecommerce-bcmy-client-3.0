import React, { useState } from 'react'
import { GrPaypal } from 'react-icons/gr'
import axios from 'axios'
import { serverOrders } from '../server';

function PaymentUser(props) {

    const [activetap, setactivetap] = useState(1);
    const [loading, setloading] = useState(false);

    const [cartname, setcartname] = useState('');
    const [cartno, setcartno] = useState('');
    const [cartext, setcartext] = useState('');
    const [cartaddress, setcartaddress] = useState('');

    const [ppemail, setpemail] = useState('');
    const cart = localStorage.getItem('cart')
    const xcart = JSON.parse(cart)

    const PaymentClick = async () => {
        try {
            setloading(true)
            const orderdata = { shippingdata : props.shippingdata, cartitems : xcart , promocode : props.ccode , promodiscount: props.promooffer, subtotal: props.subtotal, shippingtax: props.shippingtax }
          
            const { data , status } = await axios.post(`${serverOrders}/order-create` , orderdata , {withCredentials : true})
            if(status === 201){
                console.log(data)
                setloading(false)
                props.setactivetap(3)
                props.setsuccssplace(true)
            }
        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }

    return (
        <div className='checkoutgrid pb-10'>
            <div className="left order-2 bg-white p-8 flex flex-col gap-6 mt-6 mx-6 rounded-lg">
                <div className=''>
                    <div className='flex items-center gap-x-2'>
                        <input type='radio' id='ratio' className='text-3xl' onClick={(e) => setactivetap(1)} name='ratio' checked={activetap === 1 ? true : false} />
                        <label htmlFor="ratio" className='text-[18px] tracking-wide font-[500] cursor-pointer'>Pay with Debit/Credit Cart</label>
                    </div>
                    {
                        activetap === 1 && <div className='mx-6 my-3'>
                            <form action="">
                                <div className='flex justify-around items-center gap-x-10 mb-4'>
                                    <div className='flex flex-col gap-3 justify-center  w-1/2'>
                                        <label htmlFor="name" className='tracking-wide font-[500]'>Cart Number</label>
                                        <input type="text" value={cartno} onChange={(e) => setcartno(e.target.value)} className='border-[2px] py-1 px-6 w-full border-stone-500 rounded-[4px]' />
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center w-1/2'>
                                        <label htmlFor="name" className='tracking-wide font-[500]'>Cart Ext</label>
                                        <input type="text" value={cartext} onChange={(e) => setcartext(e.target.value)} className='border-[2px] py-1 px-6 border-stone-500 rounded-[4px]' />
                                    </div>
                                </div>
                                <div className='flex justify-around items-center gap-x-10 mb-4'>
                                    <div className='flex flex-col gap-3 justify-center  w-1/2'>
                                        <label htmlFor="name" className='tracking-wide font-[500]'>Cart Name</label>
                                        <input type="text" value={cartname} onChange={(e) => setcartname(e.target.value)} className='border-[2px] py-1 px-6 w-full border-stone-500 rounded-[4px]' />
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center w-1/2'>
                                        <label htmlFor="name" className='tracking-wide font-[500]'>Cart Address</label>
                                        <input type="text" value={cartaddress} onChange={(e) => setcartaddress(e.target.value)} className='border-[2px] py-1 px-6 border-stone-500 rounded-[4px]' />
                                    </div>
                                </div>
                                <button className='bg-pink-700 rounded-md py-3 px-10 text text-white mt-5' onClick={PaymentClick}>{loading ? 'loading ...' : 'Submit'} </button>
                            </form>
                        </div>
                    }
                </div>
                <div>
                    <div className='flex items-center gap-x-2'>
                        <input type='radio' onClick={(e) => setactivetap(2)} id='ratio3' name='ratio' />
                        <label htmlFor="ratio3" className='text-[18px] tracking-wide font-[500] cursor-pointer'>Pay With Paypal</label>
                    </div>
                    {
                        activetap === 2 && <form action="" className='m-6'>
                            <div className='flex flex-col gap-3 justify-center w-1/2'>
                                <label htmlFor="name" className='tracking-wide font-[500] flex items-center gap-x-2'> <GrPaypal className='text-pink-800 text-lg'/> Paypel Email</label>
                                <input type="text" value={ppemail} onChange={(e) => setpemail(e.target.value)} className='border-[2px] py-1 px-6 border-stone-500 rounded-[4px]' />
                            </div>
                            <button className='bg-pink-700 rounded-md py-3 px-10 mt-4 text text-white' onClick={PaymentClick}>{loading ? 'loading ...' : 'Submit'} </button>

                        </form>
                    }
                </div>
                <div>
                    <div className='flex items-center gap-x-2'>
                        <input type='radio' className='' onClick={(e) => setactivetap(3)} id='ratio4' name='ratio' />
                        <label htmlFor="ratio4" className='text-[18px] tracking-wide font-[500] cursor-pointer'>Cash On Delivary</label>
                    </div>
                    {
                        activetap === 3 && <div>
                            <button className='bg-pink-700 rounded-md py-3 px-10 mt-4 ml-5 text text-white' onClick={PaymentClick}>{loading ? 'loading ...' : 'Submit'} </button>
                        </div>
                    }
                </div>
            </div>
            <div className="right mx-5 order-1">
                <div className='bg-white rounded-md mt-6 p-12 flex flex-col gap-y-4'>
                    <div className='border-b-[2px] border-stone-400 pb-3 flex flex-col gap-y-5'>
                        <div className='flex items-center justify-between'>
                            <p className='text'>Subtotal</p>
                            <p className='text-[18px] font-[500]'>${props.subtotal}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text'>Shipping</p>
                            <p className='text-[18px] font-[500]'>${props.shippingtax}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text'>Discount</p>
                            <p>-</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text'>Promo Code Offer</p>
                            <p>{props.promooffer}</p>
                        </div>
                    </div>
                    <h2 className='text-right text-xl mb-3 font-[600]'>${(props.subtotal + props.shippingtax - props.promooffer).toFixed(2)}</h2>
                </div>
            </div>
        </div>

    )
}

export default PaymentUser