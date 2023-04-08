import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { serverProducts } from '../server';

function UpdateModal(props) {

    // ---> get query value
    const [loading, setloading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get('id')

    id && console.log(id)

    console.log(props)
    const [convert, setconvert] = useState(props.i.images);

    // just form data
    const [name, setname] = useState(props.i.name);
    const [category, setcategory] = useState(props.i.category);
    const [description, setdescription] = useState(props.i.description);
    const [price, setprice] = useState(props.i.price);
    const [stock, setstock] = useState(props.i.stock);


    const toastinfo = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    }



    const hchange = async (e) => {
        const form = new FormData();
        form.append("image", e.target.files[0]);
        setloading(true)
        const url = `https://api.imgbb.com/1/upload?key=6226ca30d95b139a79184223cfbc266a`;
        axios.post(url, form)
            .then((res) => {
                setloading(false)
                setconvert([...convert, { image: res.data.data.url }])
            })
    }


    const UpdateFetch = async (e) => {
        e.preventDefault()
        try {
            setloading(true)
            const { data, status } = await axios.put(`${serverProducts}/adminproducts/?id=${id}` , { name, category, description, price, stock , images : convert} , { withCredentials: true })
            if (status === 202) {
                setloading(false)
                console.log(data)
                props.setshow(false)
                props.setchange(!props.change)
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
        console.log({ name, category, description, price, stock ,convert})
    }

    return (
        <div className='wishlistbox flex justify-center items-center'>
            { loading && <Loader/>}
            <form action="" onSubmit={UpdateFetch} className='bg-white max-w-[1000px] text-black relative rounded-lg shadow-lg p-8 scpform'>
                <h1 className='m-2 text-3xl font-bold text-[#622d60]'>Update Product</h1>
                <MdClose className='absolute top-2 right-4 text-5xl cursor-pointer p-2 text-black hover:bg-gray-200' onClick={() => props.setshow(false)}/>
                <div className='flex justify-around items-center my-4'>
                    <div className='flex gap-x-2 justify-center items-center'>
                        <label htmlFor="name" className='tracking-wide'>Name</label>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Product Name' />
                    </div>
                    <div className='flex gap-x-2 justify-center items-center'>
                        <label htmlFor="name" className='tracking-wide'>Category</label>
                        <input type="text" value={category} onChange={(e) => setcategory(e.target.value)} placeholder='Product Category' />
                    </div>
                </div>
                <div className='flex justify-around items-center my-2'>
                    <div className='flex gap-x-2 justify-center items-center'>
                        <label htmlFor="name" className='tracking-wide'>Price</label>
                        <input type="number" value={price} onChange={(e) => setprice(e.target.value)} placeholder='Product Name' />
                    </div>
                    <div className='flex gap-x-2 justify-center items-center'>
                        <label htmlFor="name" className='tracking-wide'>Stock</label>
                        <input type="number" value={stock} onChange={(e) => setstock(e.target.value)} placeholder='Product Name' />
                    </div>
                </div>
                <textarea type="text" value={description} onChange={(e) => setdescription(e.target.value)} placeholder='description ...' className='h-[100px] font-[500] tracking-wide mx-4 my-4 border-[2px] border-[#622d60] px-5 py-2 rounded-lg text-left' />
                <div className='flex items-center ml-4 gap-x-5'>
                    <input type="file" className='imtsb' onChange={hchange} />
                    <div className='flex items-center gap-x-4'>
                        {convert.length > 0 && convert.map((i) => {
                            return <img className='h-12 w-12 rounded-full border-[3px] border-green-700' src={i.image} alt="nai" />
                        })}
                        <p className='cursor-pointer mx-10 mt-2 bg-[#622d60] py-2 px-5 tracking-wide text-[15px] text-white rounded-lg shadow-lg' onClick={() => setconvert('')} > Clear All </p>

                    </div>
                </div>
                <button type='submit' className='cursor-pointer mx-10 mt-2 bg-green-700 py-3 px-14 tracking-wide text-[16px] text-white rounded-lg shadow-lg' > Comfirm </button>
            </form>

        </div>
    )
}

export default UpdateModal