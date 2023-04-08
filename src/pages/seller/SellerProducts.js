import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { serverEvents, serverProducts } from '../../server';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../pages/Loader.js'
import { Link } from 'react-router-dom';
import UpdateModal from '../UpdateModal';
import SellerDashLeft from '../../components/SellerDashLeft';

function SellerProducts() {

    const [loading, setloading] = useState(false);
    const [convert, setconvert] = useState('');
    const [product, setproduct] = useState('');
    const [change, setchange] = useState(false);
    const [show, setshow] = useState(false);
    const [datasec, setdatasec] = useState('');


    const toastinfo = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    }


    const ProductDelete = async (pid) => {
        try {
            setloading(true)
            const { data, status } = await axios.delete(`${serverProducts}/adminproducts/?id=${pid}`, { withCredentials: true })
            if (status === 200) {
                setloading(false)
                console.log(data)
                setchange(!change)
                toast.success(<p className='text-stone-600 tracking-wide px-2'>Product Have Been Deleted</p>, toastinfo)
            } else {
                setloading(false)
                toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get UnSuccessfull</p>, toastinfo)
            }

        } catch (error) {
            setloading(false)
            toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get Unsuccessfull</p>, toastinfo)
            console.log(error)
        }
    }

    const adminProuductFetch = async () => {
        try {
            setloading(true)
            const { data, status } = await axios.get(`${serverProducts}/adminproducts`, { withCredentials: true })
            if (status === 200) {
                setproduct(data)
                setloading(false)
                console.log(data)
            }
        } catch (error) {
            setloading(false)
            toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get Unsuccessfull</p>, toastinfo)
            console.log(error)
        }
    }


    const EventCreate = async (eventproduct) => {
        toast.success('Create Event Button' , {theme :'light'})
        try {
            const { data , status } = await axios.post(`${serverEvents}/create-event` , eventproduct , { withCredentials : true } )
            if(status === 201){
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        adminProuductFetch()
    }, [change])

    return (

        <>
            {loading && <Loader />}
            <div className=' h-[83vh]'>
                <div className=' w-full ml-auto '>
                    {/* Product fetch data show   <---- */}
                    {
                        product && product !== '' && product.productsgula.map((i) => {
                            const { name, stock, user, _id, ratings, price, images } = i
                            return (
                                <>
                                    <section key={_id} className='bg-white relative text-black flex justify-between items-center p-3 px-10 rounded-lg m-6'>
                                        <p onClick={() => EventCreate(i)} title='create product event' className='absolute duration-150 top-3 rounded-lg text-white right-3 text-2xl py-1 px-3 cursor-pointer hover:bg-green-700 bg-green-600'>+</p>
                                        <div>
                                            <Link className='text flex items-center mb-2' to={`/products/${_id}`} > Name : 
                                             <p className='hover:border-b-2 border-b-[#622460]'> {name}</p>     </Link>
                                            <p className='text'>user : {user}</p>
                                            <p className='text'>stock : {stock}</p>
                                            <p className='text'>ratings : {ratings}</p>
                                            <p className='text'>price : {price}</p>

                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='flex items-center w-[200px] pl-9'>
                                                {
                                                    images.map((i) => {
                                                        return <img className='w-16 rounded-full shadow-lg object-cover my-4 h-16 border-[3px] border-green-600 -m-4 ' src={i.image} alt="" />
                                                    })
                                                }

                                            </div>
                                            <div className='flex justify-center gap-x-4 items-center'>

                                                <Link onClick={() => {setshow(true)
                                                setdatasec(i)}} to={`/admin/products?id=${_id}`} className='cursor-pointer bg-green-700 py-2 px-5 tracking-wide text-[16px] text-white rounded-lg shadow-lg'  > Update </Link>
                                                <button className='cursor-pointer bg-[#622d60] py-2 px-5 tracking-wide text-[15px] text-white rounded-lg shadow-lg' onClick={() => ProductDelete(_id)} > Delete </button>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        show ? <UpdateModal change={change} setchange={setchange} setshow={setshow} i={datasec} /> : null
                                    }
                                </>
                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}

export default SellerProducts