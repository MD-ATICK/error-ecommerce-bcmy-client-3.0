import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categoriesData, productData } from '../../static/data';
import { GiSelfLove } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiUser3Fill } from 'react-icons/ri'
import { CgMenuLeft } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'
import { RiMenu2Line } from 'react-icons/ri'
import Dropdown from './Dropdown';
import Loader from '../../pages/Loader';
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md'
import { toast } from 'react-toastify';

function HeaderTwo(props) {


    props.wbox === true ? console.log(true) : console.log(false)
    props.cbox === true ? console.log(true) : console.log(false)

    const { loading, user } = useSelector((state) => state.getuser)
    const [show, setshow] = useState(false);
    const [open, setopen] = useState(false);
    const [dropdown, setdropdown] = useState(false);
    const [data, setdata] = useState([]);
    const [menu, setmenu] = useState(false);

    const wishlist = localStorage.getItem('wishlist')
    const x = JSON.parse(wishlist)
    const cart = localStorage.getItem('cart')
    const xc = JSON.parse(cart)

    const deletewishlist = (id) => {
        props.setwbox(!props.wbox)
        const wishlist = localStorage.getItem('wishlist')
        const x = JSON.parse(wishlist)
        console.log(x)
        const filterproduct = x.filter((i) => i._id.toString() !== id.toString())
        console.log(filterproduct)
        localStorage.setItem('wishlist', JSON.stringify(filterproduct))
    }

    const CardAddHandle = (item) => {
        setopen(false)
        const cart = localStorage.getItem('cart')
        if (cart === null) {
            console.log('one 2')
            localStorage.setItem('cart', JSON.stringify([{ ...item, quantity: 1 }]))
        } else {
            console.log('one')
            const cart = localStorage.getItem('cart')
            const x = JSON.parse(cart)
            console.log(cart)
            const finded = x.find((i) => i._id.toString() === item._id.toString())
            console.log(finded)
            if (finded) {
                return toast.error('Cart is Already Added', { theme: 'light' })
            }
            const y = [...x, { ...item, quantity: 1 }]
            localStorage.setItem('cart', JSON.stringify(y))
            props.setcbox(!props.cbox)
        }
    }

    const wishlistboard = () => {
        setopen(!open)
        const wishlist = localStorage.getItem('wishlist')
        const x = JSON.parse(wishlist)
        setdata(x)
    }

    useEffect(() => {
        const wishlist = localStorage.getItem('wishlist')
        if (wishlist === null) {
            setdata([])
        } else {
            const x = JSON.parse(wishlist)
            setdata(x)
        }
    }, [props.wbox, props.cbox]);

    return (
        <div className=' sticky top-0 left-0'>
            {/* { loading && <Loader /> } */}
            <div className=' z-[9999]  bg-white'>
                <div className='bg-[#622d60] mt-5 text-white'>
                    <div className='md:mx-auto max-w-[1300px] h-[50px] flex justify-between items-center mx-6'>
                        {/* <div className='w-full'>
                            <div className=' flex bg-white text-black h-[45px] px-3 mt-2 rounded-t-md items-center w-full justify-between'>
                                <h1 className='flex items-center gap-x-2'>
                                    <CgMenuLeft className='text-xl' />
                                    <p>All Catagories</p>
                                </h1>
                                <IoIosArrowDown className='text-[21px] cursor-pointer' onClick={() => setdropdown(!dropdown)} />
                            </div>
                            {
                                dropdown ? <Dropdown categoriesData={categoriesData} setdropdown={setdropdown} />
                                    : null
                            }
                        </div> */}
                        <CgMenuLeft onClick={() => setmenu(true)} className='text-3xl ml-3 cursor-pointer' />

                        <div className='hidden md:block'>
                            <RiMenu2Line className='text-white icon text-3xl cursor-pointer hidden' onClick={() => setshow(!show)} />
                            <div className={show ? 'middle gap-x-8 w-full flex flex-col left-0 top-16 pl-4 absolute bg-white text-gray-700  whitespace-nowrap tracking-wide jbf' : ' pl-4 middle gap-x-8 w-full flex whitespace-nowrap text-white tracking-wide'}>
                                <NavLink to='/' >Home</NavLink>
                                <NavLink to={'/best-selling'} >Best Selling</NavLink>
                                <NavLink to={'/products'} > Products</NavLink>
                                <NavLink to={'/events'} >Events</NavLink>
                                <NavLink to={'/faq'} >FAQ</NavLink>
                            </div>
                        </div>


                        <div className='right w-full items-center cursor-pointer  flex justify-end gap-x-6'>
                            <div className='relative pr-2 pt-1' onClick={wishlistboard}>
                                <GiSelfLove className='text-[25px]' />
                                <p className='topbtn m-2'>{wishlist !== null ? x.length : 0}</p>
                            </div>
                            <div className='relative cursor-pointer pr-2 pt-1'>
                                <Link to={'my-cart'}> <AiOutlineShoppingCart className=' text-[25px]' /> </Link>
                                <p className='topbtn m-2'>{cart !== null ? xc.length : 0}</p>
                            </div>
                            <div>
                                {
                                    user && user !== "" && user.isauthuser ? <Link to={'/account'}> <img className='h-10 w-10 object-cover rounded-full cursor-pointer shadow-lg shadow-slate-100' src={user.user.avatar} alt='pai-nai?' /></Link> : <Link to={'/sign-in'}> <RiUser3Fill className='h-9 w-9 p-2 rounded-full cursor-pointer bg-stone-600 shadow-lg' /> </Link>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={menu ? 'menu text-stone-700 p-3 shadow-lg shadow-gray-800 z-[999999]' : 'menuzero shadow-lg shadow-gray-700 p-3 text-stone-600 z-[999999]'}>
                <p className='absolute top-3 right-3 text-2xl cursor-pointer' onClick={() => setmenu(false)} ><MdClose /> </p>
                <nav className='navactive flex flex-col gap-6 ml-3 mt-14'>
                    <NavLink onClick={() => setmenu(false)} className='text' to='/' >Home</NavLink>
                    <NavLink onClick={() => setmenu(false)} className='text' to={'/best-selling'} >Best Selling</NavLink>
                    <NavLink onClick={() => setmenu(false)} className='text' to={'/products'} > Products</NavLink>
                    <NavLink onClick={() => setmenu(false)} className='text' to={'/events'} >Events</NavLink>
                    <NavLink onClick={() => setmenu(false)} className='text' to={'/faq'} >FAQ</NavLink>
                </nav>

            </div>
            <div className={open ? 'wishlist text-white z-[999999]' : 'wishlistzero text-white z-[999999]'}>
                <p onClick={() => setopen(false)}><MdClose className='m-4 text-5xl bg-[#622d60] p-3 rounded-lg shadow-lg cursor-pointer ml-auto text-right text-white' /></p>
                {
                    data !== '' && data.length > 0 ? data.map((i) => {
                        const { images, price, name, _id } = i
                        return (
                            <section className='bg-white flex items-center gap-x-4 relative text-black rounded-lg p-3 m-3'>
                                <MdClose className='text-2xl cursor-pointer text-stone-500 hover:text-black absolute top-3 right-3' onClick={() => deletewishlist(_id)} />
                                <img className='w-16 rounded-lg shadow-lg object-cover mb-2' src={images[0].image} alt="" />
                                <div>
                                    <p>{name}</p>
                                    <p className='flex items-center'>Color :<div className='green'></div></p>
                                    <p className='text-orange-700 font-medium text-[16px]'>Price : {price}$ </p>
                                </div>
                                <button onClick={() => CardAddHandle(i)} className='cursor-pointer' >  <AiOutlineShoppingCart className='text-2xl my-2 ' /></button>
                            </section>
                        )
                    }) : <p className='pl-8 w-full text text-center'>No wishlist found</p>
                }
            </div>
        </div>
    )
}

export default HeaderTwo