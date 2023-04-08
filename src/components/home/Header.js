import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categoriesData, productData } from '../../static/data';
import { GiSelfLove } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiUser3Fill } from 'react-icons/ri'
import { CgMenuLeft } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillArrowThroughHeartFill } from 'react-icons/bs'
import Dropdown from './Dropdown';
import Loader from '../../pages/Loader';
import { useSelector } from 'react-redux';

function Header(props) {

    const [search, setsearch] = useState('');
    const [serachData, setserachData] = useState(null);

    const { loading, user } = useSelector((state) => state.getuser)


    const handleSearchChange = (e) => {
        const svalue = e.target.value
        setsearch(svalue)
        const filterProduct = productData.filter((product) => product.name.toLowerCase().includes(svalue.toLowerCase()))
        setserachData(filterProduct)
    }

    return (
        <div className='bg-white'>
            {/* {loading && <Loader />} */}
            <div className='flex gap-6 pt-2 justify-between items-center mx-auto max-w-[1300px] px-3'>
                <div>
                    <Link to='/'>                
                     <img className='h-auto w-[150px] object-cover cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58ax9CjWFGeUhOsOsxNCxSavvimIL-v8OlA&usqp=CAU" alt="janin na" />
                    </Link>
                </div>
                {/* <Link to={'/admin/users'} className='hover:underline text-purple-900'> Admin Page </Link> */}
                <div className='max-w-[700px] mx-auto w-full'>
                    <input type="text" className='py-[.4rem] h-[40px] px-9 placeholder-slate-800 border-[2px] min-w-[100px] w-full border-gray-400 rounded-md' placeholder='Serach Product...' value={search} onChange={handleSearchChange} />
                    {
                        serachData && serachData.length !== 0 && search.length > 0 ? (
                            <div className='h-[80vh] py-4 rounded-bl-2xl rounded-br-2xl px-3 mt-2 absolute left-0 top-32 mx-3 overflow-y-scroll z-50 bg-white'>
                                {
                                    serachData && serachData.map((item, index) => {
                                        const name = item.name
                                        const decodedProductName = name.replace(/\s+/g, "-")
                                        return (
                                            <Link to={`products/${decodedProductName}`} onClick={() => setsearch('')} key={index}>
                                                <div className="w-full flex items-start py-3">
                                                    <img className='w-[40px] h-[40px] mr-[10px]' src={item.image_Url[0].url} alt="" />
                                                    <h1 className='tracking-wide'>{item.name}</h1>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            <div className='min-h-[30vh] absolute'>
                                <p></p>
                            </div>
                        )
                    }
                </div>

                {
                    user && user.isauthuser === true && user.user.role === 'seller' ? (<Link to={`/shop/${props.id}`} >
                        <button className='tracking-wide flex text-[12px] md:text-[20px]  mr-20 md:mr-0 items-center gap-x-2 py-[.8rem] bg-[#622d60] text-white rounded-md shadow-lg px-4'>Shop <BsFillArrowThroughHeartFill className='text-lg' /></button>
                    </Link>) :
                        <Link to={'/seller/shop-signup'} >
                            <button className='tracking-wide flex items-center gap-x-2 py-[.6rem] bg-[#622d60] text-white rounded-md shadow-lg px-4'>Become Seller <BsFillArrowThroughHeartFill className='text-lg' /></button>
                        </Link>
                }

            </div>


        </div >
    )
}

export default Header