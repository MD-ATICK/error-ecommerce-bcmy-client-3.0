import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../static/data'
import { AiFillDelete } from 'react-icons/ai'
import { FaRegSadTear } from 'react-icons/fa'

function MyCart(props) {

    console.log(productData[1])
    const [quantity, setquantity] = useState(1);
    const [cartdata, setcartdata] = useState('');
    let total = 0;

    const cartdelete = (id) => {
        props.setcbox(!props.cbox)
        const cart = localStorage.getItem('cart')
        const x = JSON.parse(cart)
        const elsecart = x.filter((i) => i._id.toString() !== id.toString())
        localStorage.setItem('cart', JSON.stringify(elsecart))
    }
    const cartquantityadd = (id, quantity) => {
        if (quantity < 5) {
            props.setcbox(!props.cbox)
            // setquantity(prev => prev + 1)
            const cart = localStorage.getItem('cart')
            const xc = JSON.parse(cart)
            const finded = xc.find((i) => i._id.toString() === id.toString())
            finded.quantity++
            return localStorage.setItem('cart', JSON.stringify(xc))
        } else {
            setquantity(5)
        }
    }
    const cartquantityremove = (id, quantity) => {
        if (quantity > 1) {
            props.setcbox(!props.cbox)
            // setquantity(prev => prev - 1)
            const cart = localStorage.getItem('cart')
            const xc = JSON.parse(cart)
            const finded = xc.find((i) => i._id.toString() === id.toString())
            finded.quantity--
            return localStorage.setItem('cart', JSON.stringify(xc))
        } else {
            setquantity(1)
        }
    }

    useEffect(() => {
        const cart = localStorage.getItem('cart')
        if (cart === null) {
            setcartdata([])
        } else {
            const x = JSON.parse(cart)
            setcartdata(x)
        }
    }, [props.cbox]);

    return (
        <div>
            {
                cartdata && cartdata.length === 0 ? <div className='h-[80vh] mx-2 w-full flex justify-center items-center'><p className='text-[45px] flex items-center gap-x-8 font-[600] text-[#622d60]'>Sorry, No Cart added <FaRegSadTear className='text-[100px]' /></p></div> :
                    <div className='max-w-[1400px] flex flex-col my-4 py-6 mx-auto'>
                        <ul className='w-full  atick flex text-center justify-between mt-2'>
                            <li className='text-[13px] md:text-[17px] flex-[0.3]'>Image</li>
                            <li className='text-[13px] md:text-[17px] flex-[0.4] pl-1'>Product Name</li>
                            <li className='text-[13px] md:text-[17px] w-full flex-[0.4]' >Quanatity</li>
                            <li className='text-[13px] md:text-[17px] flex-[0.3]'>Price</li>
                            <li className='text-[13px] md:text-[17px]'>Action</li>
                        </ul>
                        <section>
                            {
                                cartdata && cartdata.map((i) => {
                                    total += (i.price * i.quantity)
                                    console.log(i)
                                    return <ul className='w-full flex justify-between my-1 atick2 border-b-[2px] border-[#622d60]'>
                                        <li className='flex-[0.3]'><img className='w-16' src={i.images[0].image} alt="" /></li>
                                        <li className='text-[13px] capitalize flex-[0.4] pl-1'>{i.name}</li>
                                        <li className=' flex-[0.4]'>
                                            
                                         <button onClick={() => cartquantityadd(i._id, i.quantity)} className='bg-[#622d60] md:py-2 py-1 px-3 md:px-4 rounded-tl-md rounded-bl-md text-white'>+</button>
                                            <input type="text" value={i.quantity} className='w-10 focus:outline-none text-center' readOnly />
                                            <button onClick={() => cartquantityremove(i._id, i.quantity)} className='bg-[#622d60] md:py-2 py-1 px-3 md:px-4 text-white rounded-tr-md rounded-br-md'>-</button> 
                                        </li>
                                        <li className='flex-[0.3]'>{i.price * i.quantity}$</li>
                                        <li><button onClick={() => cartdelete(i._id)} ><AiFillDelete className='text-2xl hover:text-[#622d60] mt-3' /></button></li>
                                    </ul>
                                })
                            }
                        </section>
                        <Link to='/checkout' className='ml-auto mr-4 text-center py-4 mt-3 rounded-lg text-white w-[250px] bg-[#622d60] shadow-lg px-6'>Check Now ({total}$)</Link>
                    </div>
            }
        </div>
    )
}

export default MyCart