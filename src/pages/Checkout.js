import React, { useEffect, useState } from 'react'
import { Country, State } from 'country-state-city'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import PaymentUser from '../components/PaymentUser'

function Checkout() {

    const navigate = useNavigate()
    const [activetap, setactivetap] = useState(1);
    const [payment, setpayment] = useState(false);
    const [succssplace, setsuccssplace] = useState(false);
    const [ccode, setccode] = useState('');
    const [loading, setloading] = useState(false);
    
    const [data, setdata] = useState('');
    const [sdata, setsdata] = useState('');
    
    // now st 
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [address1, setaddress1] = useState('');
    const [address2, setaddress2] = useState('');
    const [phone, setphone] = useState('');
    const [zipCode, setzipCode] = useState('');
    const [country, setcountry] = useState('');
    const [city, setcity] = useState('');

    const [ss, setss] = useState(false);
    let subtotal = 0
    let shippingtax = 89
    let promooffer = 0;


    //     <select name="" id="" className='yesiam' required value={state} onChange={(w) => setstate(w.target.value)}>
    //     <option value="">State</option>
    //     {
    //         State && State.getStatesOfCountry(country).map((state) => {
    //             return <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
    //         })
    //     }
    // </select>


    data != '' && data.map((i) => {
        subtotal += i.price * i.quantity
    })
    const shippingdata = { name, email, address1, address2, phoneNumber: phone, zipCode, country, city }

    const ShippingClick = () => {
        setloading(true)
        if (ccode.length > 0) {
            if (12345 === Number(ccode)) {
                console.log('one')
                setss(true)
                subtotal -= subtotal * 0.05
                toast(subtotal, { theme: 'light' })
                const shippingdata = { name, email, address1, address2, phoneNumber: phone, zipCode, country, city }
                localStorage.setItem('s_info', JSON.stringify(shippingdata))
                setTimeout(() => {
                    setactivetap(2)
                    setpayment(true)
                    setloading(false)
                }, 1000);
            } else {
                console.log('one2')
                setloading(false)
                toast('Copuon Code Not Avaiable', { theme: 'light' })
            }
        } else {
            console.log('two')
            localStorage.setItem('s_info', JSON.stringify(shippingdata))
            toast(subtotal, { theme: 'light' })
            console.log(shippingdata)
            setTimeout(() => {
                setactivetap(2)
                setpayment(true)
                setloading(false)
            }, 1000);
        }
    }

    console.log(sdata)

    useEffect(() => {
        const x = localStorage.getItem('cart')
        const y = JSON.parse(x)
        const m = localStorage.getItem('s_info')
        const n = JSON.parse(m)
        setdata(y)
        if (m === null) {
            return;
        } else {
           setname(n.name)
           setaddress1(n.address1)
           setaddress2(n.address2)
           setcity(n.city)
           setcountry(n.country)
           setphone(n.phoneNumber)
           setemail(n.email)
           setzipCode(n.zipCode)
        }
    }, []);

    return (
        <div className='bg-[#622d60] h-[82vh]'>

            <div className='w-full flex mt-6 px-4 justify-center'>
                <div className='flex items-center'>
                    <p className='py-3 px-4 bg-pink-700 shadow-lg flex rounded-full text-[13px] text-white'>1. Shipping</p>
                    <p className={payment ? 'h-[4px] rounded-full w-[80px] bg-pink-700' : 'h-[4px] rounded-full w-[70px] bg-stone-400'}></p>
                </div>
                <div className='flex items-center'>
                    <p className={payment ? 'py-3 px-4 bg-pink-700 text-[13px] rounded-full text-white' : 'py-3 px-4 bg-stone-400 text-[13px] rounded-full text-white'}>2. Payment</p>
                    <p className={succssplace ? 'h-[4px] rounded-full w-[80px] bg-pink-700' : 'h-[4px] rounded-full w-[70px] bg-stone-400'}></p>
                </div>
                <div className='flex items-center'>
                    <p className={succssplace ? 'py-3 px-4 bg-pink-700 text-[13px] rounded-full text-white' : 'py-3 px-4 bg-stone-400 text-[13px] rounded-full text-white'}>3. Success</p>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto'>
                {
                    activetap === 1 ? <div className='checkoutgrid'>
                        <div className="left bg-white p-6 mt-6 mx-6 rounded-lg ">
                            <p className='text-3xl py-2 font-[600] mb-4 text-pink-800'>Shipping Address</p>
                            <form action="" className='spform px-2'>
                                <div className='flex justify-around items-center gap-x-10 mb-4'>
                                    <div className='flex flex-col gap-3 justify-center  w-1/2'>
                                        <label htmlFor="name" className='tracking-wide'>Full name</label>
                                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} className='border-[2px] py-1 px-6 w-full border-stone-500 rounded-[4px]' />
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center w-1/2'>
                                        <label htmlFor="name" className='tracking-wide'>Email Address</label>
                                        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className='border-[2px] py-1 px-6 border-stone-500 rounded-[4px]' />
                                    </div>
                                </div>
                                <div className='flex justify-around items-center  gap-x-10 mb-4'>
                                    <div className='flex flex-col gap-3 justify-center  w-1/2'>
                                        <label htmlFor="name" className='tracking-wide'>Phone Number</label>
                                        <input type="text" value={phone} onChange={(e) => setphone(e.target.value)} className='border-[2px] py-1 px-6 w-full border-stone-500 rounded-[4px]' />
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center w-1/2'>
                                        <label htmlFor="name" className='tracking-wide'>Zip Code</label>
                                        <input type="text" value={zipCode} onChange={(e) => setzipCode(e.target.value)} className='border-[2px] py-1 px-6 border-stone-500 rounded-[4px]' />
                                    </div>
                                </div>
                                <div className='flex justify-around items-center  gap-x-10 mb-4'>
                                    <div className='flex flex-col gap-3 justify-center  w-1/2'>
                                        <label htmlFor="name" className='tracking-wide'>Country</label>
                                        <select type="text" value={country} onChange={(e) => setcountry(e.target.value)} className='border-[2px] py-1 font-[500] px-6 w-full border-stone-500 rounded-[4px]' >
                                            <option value="ues">country</option>
                                            <option value="bangladesh">Bangaldesh</option>
                                            <option value="dubai">Dubai</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center w-1/2'>
                                        <label htmlFor="name" className='tracking-wide'>City</label>
                                        <select type="text" value={city} onChange={(e) => setcity(e.target.value)} className='border-[2px] py-1 px-6 font-[500] border-stone-500 rounded-[4px]' >
                                            <option value="">city</option>
                                            <option value="chadpur">Chadpur</option>
                                            <option value="soropbata">Soropbata</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex justify-around items-center  gap-x-10 mb-4'>
                                    <div className='flex flex-col gap-3 justify-center  w-1/2'>
                                        <label htmlFor="name" className='tracking-wide'>Address 1</label>
                                        <input type="text" value={address1} onChange={(e) => setaddress1(e.target.value)} className='border-[2px] py-1 px-6 w-full border-stone-500 rounded-[4px]' />
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center w-1/2'>
                                        <label htmlFor="name" className='tracking-wide'>Address 2</label>
                                        <input type="text" value={address2} onChange={(e) => setaddress2(e.target.value)} className='border-[2px] py-1 px-6 border-stone-500 rounded-[4px]' />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="right mx-6 mb-8">
                            <div className='bg-white rounded-md mt-6 py-6 px-6 flex flex-col gap-y-4'>
                                <div className='border-b-[2px] border-stone-400 pb-3 flex flex-col gap-y-4'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text'>Subtotal</p>
                                        <p className='text-[18px] font-[500]'>${subtotal}</p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text'>Shipping</p>
                                        <p className='text-[18px] font-[500]'>${shippingtax}</p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text'>Discount</p>
                                        <p>-</p>
                                    </div>
                                </div>
                                <h2 className='text-right text-xl mb-3 font-[600]'>${(subtotal + shippingtax).toFixed(2)}</h2>
                                <input type="text" placeholder='Copoun Code' title='if have any copuon code enter here.' value={ccode} onChange={(e) => setccode(e.target.value)} className='border-[2px] py-[6px] mx-3 px-6 border-stone-400 rounded-[4px] placeholder:text-[#858585]' />
                                <button className='bg-[#622d60] rounded-md py-3 px-3 mx-3 text text-white mt-5' onClick={ShippingClick}>{loading ? 'loading ...' : 'Place Order'} </button>
                            </div>
                        </div>
                    </div> : null ||
                        activetap === 2 ? <PaymentUser ccode={ss ? ccode : 'no promo active'} shippingdata={shippingdata} promooffer={ss ? subtotal * 0.05 : 0} subtotal={subtotal} shippingtax={shippingtax} setactivetap={setactivetap} setsuccssplace={setsuccssplace} /> : null ||
                            activetap === 3 ? <div className='w-full h-[60vh]  flex flex-col justify-center items-center gap-6'>
                        <p className='text-[60px] text-white font-[600] text-center'>Your Order Successfully Placed.</p>
                        <div className='flex gap-x-6'>
                            <button onClick={() => navigate('/order')} className='bg-pink-700 underline rounded-md py-3 px-6 mt-4 text text-white' >Show Order</button>
                            <button onClick={() => navigate('/')} className='bg-green-700 underline rounded-md py-3 px-6 mt-4 text text-white' > Go to Home</button>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Checkout