import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { BsSuitHeartFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { useSelector } from 'react-redux'

function ProductCart(props) {
    const d = props.item.name
    const product_name = d.replace(/\s+/g, "-")
    const [click, setclick] = useState(false);
    const [eye, seteye] = useState(false);
    
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.getuser)


    useEffect(() => {
        const wishlist = localStorage.getItem('wishlist')
        const x = JSON.parse(wishlist)
        if (wishlist !== null) {
            const finded = x.find((i) => i._id.toString() === props.item._id.toString())
            if (finded) {
                setclick(true)
            } else {
                setclick(false)
            }
        } else {
            setclick(false)
        }
    }, [props.wbox]);



    const CardAddHandle = () => {
        if(user && user !== '' &&user.isauthuser === false){
            return navigate('/sign-in')
        }
        const cart = localStorage.getItem('cart')
        props.setwbox(!props.wbox)
        if (cart === null) {
            console.log(props.item)
            localStorage.setItem('cart', JSON.stringify([{ ...props.item, quantity: 1 }]))
        } else {
            const cart = localStorage.getItem('cart')
            const x = JSON.parse(cart)
            const finded = x.find((i) => i._id.toString() === props.item._id.toString())
            if (finded) {
                return toast.error('Cart is Already Added', { theme: 'light' })
                // const cart = localStorage.getItem('cart')
                // const xc = JSON.parse(cart)
                // const finded = xc.find((i) => i._id.toString() === props.item._id.toString())
                // finded.quantity++
                // return localStorage.setItem('cart', JSON.stringify(xc))
            }
            const y = [...x, { ...props.item, quantity: 1 }]
            localStorage.setItem('cart', JSON.stringify(y))
        }
    }

    const wishlistClick = () => {
        props.setwbox(!props.wbox)
        const wishlist = localStorage.getItem('wishlist')
        setclick(!click)
        console.log('atick')
        console.log(wishlist)
        if (wishlist === null) {
            console.log(props.item)
            localStorage.setItem('wishlist', JSON.stringify([props.item]))
        } else {
            const x = JSON.parse(wishlist)
            const finded = x.find((i) => i._id.toString() === props.item._id.toString())
            if (finded) {
                return toast.error('this item already added in wishlist', { theme: 'light' })
            }
            console.log('atick2')
            const y = [...x, props.item]
            localStorage.setItem('wishlist', JSON.stringify(y))
        }
    }

    const wishlistdelete = () => {
        props.setwbox(!props.wbox)
        const wishlist = localStorage.getItem('wishlist')
        setclick(!click)
        const id = props.item._id
        const x = JSON.parse(wishlist)
        console.log(x)
        const filterproduct = x.filter((i) => i._id.toString() !== id.toString())
        console.log(filterproduct)
        localStorage.setItem('wishlist', JSON.stringify(filterproduct))
    }

    return (
        <>
            <div className='w-full md:h-[370px] bg-white rounded-lg shadow-md p-3  cursor-pointer'>
                {eye ? <div className='fixed h-screen w-full flex items-center justify-center z-[9999] top-0 left-0 bgc'>
                    <div className='relative h-[80vh] grid grid-cols-2 mx-auto place-items-center rounded-md overflow-y-scroll w-[1000px] bg-white shadow-lg'>
                        <div className="left ml-20 w-full p-3">
                            <img src={props.item.images[0].image} className='h-[300px] rounded-2xl shadow-lg object-cover w-[400px] mx-auto' />
                            <div className='py-3 flex items-center gap-x-4 ml-5'>
                                <img src={'item.shop.shop_avatar.url'} className='w-11 h-11 rounded-full shadow-lg' alt="paina?" />
                                <div>
                                    <p>{'item.shop.name'}</p>
                                    <p>({'item.shop.ratings'}) Ratings</p>
                                </div>
                            </div>
                            <button className='py-2 mt-3 ml-6 text-[14px] px-3 tracking-wide bg-zinc-700 rounded-md shadow-lg text-white'>Send message</button>
                        </div>
                        <div className="right px-20 w-full p-5">
                            <p className='font-[600] tracking-wide text-[29px] py-2 capitalize'>{props.item.name}</p>
                            <p className='font-[500] tracking-wide text-[18px] py-2 capitalize'> Category : {props.item.category}</p>
                            <p className='text'>{props.item.description}</p>
                            <p className='font-[500] tracking-wide text-[17px] py-2 text-[#622d60]'>Price : {props.item.price}$</p>
                            <p className='font-[500] tracking-wide text-[17px] py-2 text-[#622d60]'>Total Sell : {props.item.totalSell}$</p>
                            <p className='font-[500] tracking-wide text-[17px] py-2 text-[#622d60]'>({props.item.ratings}) Ratings</p>
                            <p className='font-[500] tracking-wide text-[17px] py-2 text-[#622d60]'> Stock : {props.item.stock}</p>
                            <div className='flex justify-between mt-3 items-center'>
                                <div className='flex items-center'>
                                    <button className=' py-[6px] bg-purple-900 rounded-tl-md rounded-bl-md text-white text-xl px-4 text-center'>+</button>
                                    <input type="number" className='w-10 text-center pl-4 py-2 bg-gray-300' value={5} readOnly />
                                    <button className='py-[6px] bg-purple-900 rounded-tr-md rounded-br-md text-white px-4 text-xl text-center'>-</button>
                                </div>
                                <button className='text-xl'><FiHeart /></button>
                            </div>
                            <button className='py-3 px-10 mt-6 bg-[#622d60] rounded-xl text-white text-[15px] text-center'>Add Cart</button>
                        </div>
                        <button className='fixed top-11 right-[14.4rem] text-2xl z-50 p-3 bg-purple-900 shadow-lg rounded-full text-white' onClick={() => seteye(!eye)} ><MdClose /></button>
                    </div>
                </div> : null}

            <div className='flex justify-between items-center'>
                <Link to={`/products/${props.item._id}`}>
                    <img src={props.item.images[0].image} className='w-[150px] h-[130px] md:w-[200px] md:h-[180px] rounded-xl shadow-lg hover:duration-150 ml-2 hover:scale-105 object-cover' alt="" />
                </Link>
                <div className='flex flex-col justify-end'>
                    { click ? <button title='heart wishes' onClick={wishlistdelete}><BsSuitHeartFill className='text-[#622d60] text-xl my-2' /></button> : <button onClick={wishlistClick} className='text-zinc-500 text-xl my-2' title='heart wishes' ><FiHeart /></button>}
                    <button onClick={() => seteye(!eye)} title='product details' className='text-2xl my-1'><AiOutlineEye /></button>
                    <button className='text-xl' title='add cart' onClick={CardAddHandle}><AiOutlineShoppingCart /></button>
                </div>

            </div>

                <Link to={`/products/${product_name}`} >
                    <p className='text-[18px] capitalize font-[600] mt-4'>{props.item.name.length > 40 ? props.item.name.slice(0, 40) + '...' : props.item.name}</p>
                </Link>
                <p className='py-3'><Link to={`/seller-shop`} className='text-[15px] text-gray-800 hover:underline tracking-wide' >{props.item.category}</Link></p>
                <div className="star flex py-3">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div className='w-full flex justify-between'>
                    <h1 className=''>
                        <p>{props.item.price}$</p>
                        {/* {item?.discount_price ? <p className='text-red-600 text-[14px] absolute -top-1 -right-12 line-through'>{item.discount_price}$</p> : null} */}
                    </h1>
                    <p className='font-[500] text-green-800'>{props.item.totalSell} sold</p>
                </div>
            </div>
        </>
    )
}

export default ProductCart


