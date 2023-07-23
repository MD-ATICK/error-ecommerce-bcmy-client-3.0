import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverEvents, serverProducts } from '../../server';
import { useNavigate } from 'react-router-dom';


function CreateEvent(props) {

    const [convert, setconvert] = useState('');
    const [loading, setloading] = useState(false);


    // just form data
    const [name, setname] = useState('');
    const [category, setcategory] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const [stock, setstock] = useState(1);
    const [discount, setdiscount] = useState('');
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const navigate = useNavigate()


    const token = localStorage.getItem('token')

    const hchange = async (e) => {
        const form = new FormData();
        setloading(true)
        form.append("image", e.target.files[0]);
        const url = `https://api.imgbb.com/1/upload?key=6226ca30d95b139a79184223cfbc266a`;
        axios.post(url, form)
            .then((res) => {
                setloading(false)
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


    const newEventCreate = async (e) => {
        e.preventDefault()
        try {
            console.log({ name, category, description, price, stock, images: convert, startdate:  new Date(startdate).toISOString(), enddate:  new Date(enddate).toISOString() , discount })
            const { data, status } = await axios.post(`${serverEvents}/create-event`, { name, category, description, price, stock, images: convert, startdate:  new Date(startdate).toISOString(), enddate:  new Date(enddate).toISOString() , discount }, { headers : { Authorization : token}})
            if (status === 201) {
                console.log(data)
                props.setactivetap(5)
                navigate('/events')
                toast.success(<p className='text-stone-600 tracking-wide px-2'>Product Create Successfull</p>, toastinfo)
            }
        } catch (error) {
            toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Create Unsuccessfull</p>, toastinfo)
            console.log(error)
        }
    }

    const datechange = (e) => {
        const startdate = new Date(e.target.value)
        const minenddate = new Date(startdate.getTime() + 3 * 24 * 60 * 60 * 1000)
        document.getElementById('endDate').min = minenddate.toISOString().slice(0, 10)
        setstartdate(e.target.value)
    }
    const dateechange = (e) => {
        const startdate = new Date(e.target.value).toISOString()
        setenddate(e.target.value)
    }

    // useEffect(() => {
    //     window.location.href.includes('seller') ? setasdash(false) : setasdash(true)
    // }, []);

    // category# , name# , description# , images(array)# , price# , ratings , review(arrau) , stock# , totalsell 

    return (
        <>
            <div className='w-full px-4 h-[90vh] py-6 flex justify-center items-center'>
                <div className='bg-white relative shadow-lg rounded-md h-full overflow-y-scroll p-4 w-[500px]'>
                    {loading && <div className="createproductloader">
                        <div>Loading ...</div>
                    </div>}
                    <h1 className='text-2xl font-semibold text-center text-orange-700'>Create Events</h1>
                    <form action="" onSubmit={newEventCreate} className='mt-3 flex flex-col gap-y-2'>
                        <label htmlFor="" className='font-[500] tracking-wide'>Name <span className='text-red-600'>*</span></label>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} className='border-[2px] text-[15px] px-4 py-2 border-stone-400 rounded-sm mb-4' />

                        <input type="date" value={startdate} onChange={datechange} className='border-[2px] text-[15px] px-4 py-2 border-stone-400 rounded-sm mb-4' />
                        <input type="date" id='endDate' value={enddate} onChange={dateechange} className='border-[2px] text-[15px] px-4 py-2 border-stone-400 rounded-sm mb-4' />

                        <label htmlFor="" className='font- [500] tracking-wide '>Description <span className='text-red-600'>*</span></label>
                        <textarea type="text" value={description} onChange={(e) => setdescription(e.target.value)} className='border-[2px] min-h-[200px] p-3 border-stone-400 rounded-sm mb-4' />
                        <label htmlFor="" className='font-[500] tracking-wide'>Category <span className='text-red-600'>*</span></label>
                        <select type="text" value={category} onChange={(e) => setcategory(e.target.value)} className='border-[2px] py-2 border-stone-400 rounded-sm mb-4 text-stone-600 font-[500] text-[15px] px-4'>
                            <option value="">Category</option>
                            <option value="pizza">Pizza</option>
                            <option value="beaf">Beaf</option>
                        </select>
                        <label htmlFor="" className='font-[500] tracking-wide'>Price <span className='text-red-600'>*</span></label>
                        <input type="number" value={price} onChange={(e) => setprice(e.target.value)} className='border-[2px] border-stone-400 px-4 py-2 text-[15px] rounded-sm mb-4' />
                        <label htmlFor="" className='font-[500] tracking-wide'>Discount <span className='text-red-600'>*</span></label>
                        <input type="number" value={discount} onChange={(e) => setdiscount(e.target.value)} className='border-[2px] border-stone-400 px-4 py-2 text-[15px] rounded-sm mb-4' />
                        <label htmlFor="" className='font-[500] tracking-wide'>Stock <span className='text-red-600'>*</span></label>
                        <input type="number" value={stock} onChange={(e) => setstock(e.target.value)} className='border-[2px] border-stone-400 px-4 py-2 text-[15px] rounded-sm mb-4' />
                        <div className='flex items-center gap-x-3 ml-3'>
                            <label htmlFor="img"><img className='h-16 w-16 object-cover cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png" title='img add' alt="" /></label>
                            <input type="file" id='img' name='img' className='imtsb hidden' onChange={hchange} />
                            <div className='flex items-center gap-x-4'>

                                {convert.length > 0 && convert.map((i) => {
                                    return <img className='h-12 w-12 rounded-full object-cover border-[3px] border-orange-600' src={i.image} alt="nai" />
                                })}
                            </div>

                        </div>
                        <button className='py-2 px-6 bg-orange-600 text-white mx-6 mt-3' type='submit'>Comfirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateEvent