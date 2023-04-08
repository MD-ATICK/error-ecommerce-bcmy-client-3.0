import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box';
import { AiFillEdit } from 'react-icons/ai';
import { MdClose, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { serverCopouns, serverOrders } from '../../server';
import Loader from '../../pages/Loader';
import { FiPlus } from 'react-icons/fi';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DiscountCodes() {

    const [open, setopen] = useState(false);
    const [change, setchange] = useState(false);
    const [loading, setloading] = useState(false);

    const [copoundata, setcopoundata] = useState('');
    const [name, setname] = useState('e35c88e7bab5988917dd52621c');
    const [minamount, setminamount] = useState('600');
    const [value, setvalue] = useState('10');
    const [maxamount, setmaxamount] = useState('60000');
    const [randomcode, setrandomcode] = useState('');
    const [error, seterror] = useState(false);

    const copounFetch = async () => {
        try {
            setloading(true)
            const { data, status } = await axios.get(`${serverCopouns}/discountcopounget`, { withCredentials: true })
            if (status === 200) {
                console.log(data)
                setcopoundata(data)
                setloading(false)
            }
        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }


    const row = []


    copoundata && copoundata !== '' && copoundata.copouns.map((i) => {
        const { _id, user, use, name, valuePercentage, minamount, maxamount } = i
        return row.push({ id: _id, user, use, name, valuePercentage, maxminamount: `${minamount}-${maxamount}` })
    })

    const dltCopoun = async (id) => {
        try {
            // setloading(true)
            const { data, status } = await axios.delete(`${serverCopouns}/discountcopoundelete?id=${id}`, { withCredentials: true })
            if (status === 200) {
                console.log(data)
                // setloading(false)
                setchange(true)
            }
        } catch (error) {
            // setloading(false)
            console.log(error)
        }
    }

    const columns = [
        { field: 'id', headerName: 'Copoun ID', width: 150, flex: 1 },
        { field: 'name', headerName: 'Copoun Code', width: 150, flex: 1 },
        {
            field: 'user',
            headerName: 'Created User',
            width: 150,
            flex: 0.6,
        },
        {
            field: 'use',
            headerName: 'Use',
            width: 150,
            flex: 0.4,
            cellClassName: (params) => {
                return params.row.use === true ? 'greenc' : 'redc'
            }
        },
        {
            field: 'valuePercentage',
            headerName: 'Discount (%)',
            width: 150,
            flex: 0.7,
        },
        {
            field: 'maxminamount',
            headerName: 'Limit of Amount',
            width: 150,
            flex: 0.6,
        },
        {
            field: 'action',
            headerName: 'Action',
            type: 'number',
            width: 150,
            flex: 0.5,
            cellClassName: 'iconsize',
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link className='hover:text-orange-700 text-xl text-right' to={`/order/${params.id}`}><AiFillEdit /></Link>
                        <button className=' hover:text-orange-700 text-xl' onClick={() => dltCopoun(params.id)} ><MdDelete /></button>
                    </>
                )
            }
        },
    ]

    const randomCopounGenerator = () => {
        let randomCopuan = '';
        let ary = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", 'h', "i", "j", "k", "l", "m", "n"]
        for (let w = 0; w < 26; w++) {
            let random = Math.round(Math.random() * 15);
            let random2 = ary[random]
            randomCopuan = randomCopuan + random2
            console.log(randomCopuan)
            setrandomcode(randomCopuan)
        }
    }

    const CopounSubmit = async (e) => {
        e.preventDefault()
        const copoundetails = { name, valuePercentage: value, minamount, maxamount }
        try {
            console.log(copoundetails)
            const { data, status } = await axios.post(`${serverCopouns}/discountcopoun`, copoundetails, { withCredentials: true })
            if (status === 201) {
                console.log(data)
                setopen(false)
            }

        } catch (error) {
            seterror(true)
            console.log(error.response.data.error)
        }
    }


    useEffect(() => {
        seterror(false)
        copounFetch()
    }, [change]);


    return (
        <div className='w-[440px] sbnone md:w-full overflow-x-scroll'>
            {
                loading && <Loader />
            }
            {
                open ? (
                    <div className='w-full h-[100vh] fixed top-0 left-0 z-[99999] bg-[#0000009a] py-6 flex justify-center items-center'>
                        <div className='bg-white relative shadow-lg rounded-md h-full overflow-y-scroll p-4 w-[500px]'>
                            <button onClick={() => setopen(false)} className='m-3 absolute top-0 left-2 hover:bg-gray-200 text-3xl'><MdClose /></button>
                            <h1 className='text-3xl pt-8 pb-4 font-[600] text-center text-stone-500'>Create Copoun Code</h1>
                            <form action="" className='mt-3 flex flex-col gap-y-2' onSubmit={CopounSubmit}>
                                <label htmlFor="" className='font-[500] tracking-wide'>Copoun Name <span className='text-red-600'>*</span></label>
                                <input type="text" value={name} onChange={(e) => setname(e.target.value)} className='border-[2px] text-[15px] px-4 py-2 border-stone-400 rounded-sm ' />
                                {error ? <p className='text-orange-600 text '>* Provide us unique name for each copoun</p> : null}
                                <label htmlFor="" className='font-[500] tracking-wide'>Discount Percentage <span className='text-red-600'>*</span></label>
                                <input type="number" value={value} onChange={(e) => setvalue(e.target.value)} className='border-[2px] border-stone-400 px-4 py-2 text-[15px] rounded-sm mt-4 mb-4' />
                                <label htmlFor="" className='font-[500] tracking-wide'>Min Amount <span className='text-red-600'>*</span></label>
                                <input type="number" value={minamount} onChange={(e) => setminamount(e.target.value)} className='border-[2px] border-stone-400 px-4 py-2 text-[15px] rounded-sm mb-4' />
                                <label htmlFor="" className='font-[500] tracking-wide'>Max Amount <span className='text-red-600'>*</span></label>
                                <input type="number" value={maxamount} onChange={(e) => setmaxamount(e.target.value)} className='border-[2px] border-stone-400 px-4 py-2 text-[15px] rounded-sm mb-4' />
                                <label htmlFor="" className='font-[500] tracking-wide'>Random Copoun Code <span className='text-red-600'>*</span></label>
                                <div className='m-3 flex items-center gap-x-6'>
                                    <input type="text" value={randomcode} className='border-[2px] border-[#622d60] px-4 py-[8px] min-w-[350px] text-[15px] rounded-lg' />
                                    <p className='h-[40px] w-[40px] bg-[#622d60] rounded-md text-white text-2xl flex justify-center items-center' onClick={randomCopounGenerator}><GiPerspectiveDiceSixFacesRandom /> </p>
                                </div>
                                <button className='py-2 px-6 bg-orange-600 text-white mx-6 mt-3' type='submit'>Comfirm</button>
                            </form>
                        </div>
                    </div>) : null
            }
                {
                    loading && <Loader />
                }
                <Box className='w-[1000px] md:w-full '>
                    <div className='bg-white w-full p-3 flex justify-start md:justify-end items-center'>
                        <button onClick={() => setopen(true)} className='flex cursor-pointer items-center bg-green-700 text-white rounded-md shadow-lg py-2 px-3'> <FiPlus className='text-[30px] font-bold mr-1' /> Create Copoun</button>
                    </div>
                    <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={12}
                        className='myorder'
                        autoHeight
                        disableSelectionOnClick
                    />
                </Box>
        </div>
    )
}

export default DiscountCodes