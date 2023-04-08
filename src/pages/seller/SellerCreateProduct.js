import axios from 'axios';
import React, { useState , useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SellerDashLeft from '../../components/SellerDashLeft';
import { serverProducts } from '../../server';
import AdminDashLeft from '../admin/AdminDashLeft';


function SellerCreateProduct() {

    const [convert, setconvert] = useState('');
    const [asdash, setasdash] = useState(false);

    
    // just form data
    const [name, setname] = useState('chips');
    const [category, setcategory] = useState('potatos');
    const [description, setdescription] = useState('be hosnest be carefull');
    const [price, setprice] = useState(9990);
    const [stock, setstock] = useState(5);

    const hchange = async (e) => {
        const form = new FormData();
        form.append("image", e.target.files[0]);
        const url = `https://api.imgbb.com/1/upload?key=6226ca30d95b139a79184223cfbc266a`;
        axios.post(url, form)
            .then((res) => {
                setconvert([...convert, { image: res.data.data.url }])
            })
    }

    const toastinfo = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    }


    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log({ name, category, description, price, stock, images: convert })
            const { data, status } = await axios.post(`${serverProducts}/productCreate`, { name, category, description, price, stock, images: convert }, { withCredentials: true })
            if (status === 201) {
                console.log(data)
                toast.success(<p className='text-stone-600 tracking-wide px-2'>Product Create Successfull</p>, toastinfo)
            }
        } catch (error) {
            toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Create Unsuccessfull</p>, toastinfo)
            console.log(error)
        }
    }

    useEffect(() => {
        window.location.href.includes('seller') ? setasdash(false) : setasdash(true)
    }, []);

    // category# , name# , description# , images(array)# , price# , ratings , review(arrau) , stock# , totalsell 

    return (
        <>
            <div className='gtap'>
                <div className='w-full flex items-center justify-center'>
                    {
                        asdash ? <AdminDashLeft /> : <SellerDashLeft />
                    }
                    
                </div>
                <div className='h-[82vh] w-full ml-auto bg-[#622d60] py-6 px-14'>
                    <form action="" onSubmit={HandleSubmit} className='bg-white rounded-lg shadow-lg p-8 scpform'>
                        <div className='flex justify-around items-center my-3'>
                            <div className='flex gap-x-2 justify-center items-center'>
                                <label htmlFor="name" className='tracking-wide'>Name</label>
                                <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Product Name' />
                            </div>
                            <div className='flex gap-x-2 justify-center items-center'>
                                <label htmlFor="name" className='tracking-wide'>Category</label>
                                <input type="text" value={category} onChange={(e) => setcategory(e.target.value)} placeholder='Product Category' />
                            </div>
                        </div>
                        <div className='flex justify-around items-center my-3'>
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
                        <div className='flex items-center ml-5 gap-x-5'>
                            <input type="file" className='imtsb' onChange={hchange} />
                            <div className='flex items-center gap-x-4'>

                                {convert.length > 0 && convert.map((i) => {
                                    return <img className='h-12 w-12 rounded-full border-[3px] border-green-700' src={i.image} alt="nai" />
                                })}
                            </div>
                        </div>
                        <button type='submit' className='cursor-pointer mx-10 mt-3 bg-green-700 py-3 px-8 tracking-wide text-[16px] text-white rounded-lg shadow-lg' > Comfirm </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SellerCreateProduct