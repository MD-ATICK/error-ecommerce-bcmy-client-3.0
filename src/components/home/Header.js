import React, { useEffect, useState } from 'react'
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverProducts } from '../../server';
import axios from 'axios';


function Header(props) {

    const [search, setsearch] = useState('');
    const [serachData, setserachData] = useState(null);
    const [product, setproduct] = useState('');

    const { loading, user } = useSelector((state) => state.getuser)

    const FetchProducts = async () => {
        try {
            const { data, status } = await axios.get(`${serverProducts}/adminproducts`)
            // if (status === 200) {
            //     if (category === null) {
            //         setproduct(data)
            //     } else {
            //         const filterdata = data && data.filter((i) => i.category === category)
            //         setproduct(filterdata)
            //     }
            //     console.log(data)
            // }
            if(status === 200){
                setproduct(data)
            }
        } catch (error) {
            toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get Unsuccessfull</p>)
            console.log(error)
        }
    }

    const handleSearchChange = (e) => {
        const svalue = e.target.value
        setsearch(svalue)
        const filterProduct = product && product !== '' && product.products.filter((product) => product.name.toLowerCase().includes(svalue.toLowerCase()))
        setserachData(filterProduct)
    }

    useEffect(() => {
        FetchProducts()
    }, []);

    return (
        <div className='bg-white'>
            {/* {loading && <Loader />} */}
            <div className='flex gap-5 pt-2 justify-between items-center mx-auto max-w-[1300px] px-3'>
                <div>
                    <Link to='/'>                
                     <img className='h-auto w-[150px] object-cover cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58ax9CjWFGeUhOsOsxNCxSavvimIL-v8OlA&usqp=CAU" alt="janin na" />
                    </Link>
                </div>
                {/* <Link to={'/admin/users'} className='hover:underline text-purple-900'> Admin Page </Link> */}
                <div className='max-w-[700px] mx-auto w-full'>
                    <input type="text" className='py-[.4rem] h-[40px] px-9 placeholder-slate-800 border-[2px] min-w-[90px] w-full border-stone-500 rounded-md' placeholder='Serach Product...' value={search} onChange={handleSearchChange} />
                    {
                        serachData && serachData !== '' && serachData.length !== 0 && search.length > 0 ? (
                            <div className='h-[80vh] min-w-[300px] py-4 rounded-bl-2xl rounded-br-2xl shlg px-3 mt-2 absolute left-0 top-32 mx-3 overflow-hidden z-50 bg-white'>
                                {
                                    serachData && serachData.map((item, index) => {
                                        const name = item.name
                                        const decodedProductName = name.replace(/\s+/g, "-")
                                        return (
                                            <Link to={`products/${item._id}`} onClick={() => setsearch('')} key={index}>
                                                <div className="w-full flex items-start py-3">
                                                    <img className='w-[40px] h-[40px] mr-[10px]' src={item.images[0].image} alt="" />
                                                    <h1 className='tracking-wide'>{decodedProductName}</h1>
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
                            <button className='tracking-wide flex items-center w-[100px] gap-x-2 mr-20 py-[.6rem] bg-[#622d60] text-white rounded-md shadow-lg px-4 text-[12px]'>Become a Seller !</button>
                        </Link>
                }

            </div>


        </div >
    )
}

export default Header