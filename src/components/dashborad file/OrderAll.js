import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { serverOrders } from '../../server';
import Loader from '../../pages/Loader';

function OrderAll() {

    const [orderdata, setorderdata] = useState('');
    const [change, setchange] = useState(false);
    const [loading, setloading] = useState(false);

    const token = localStorage.getItem('token')

    const orderFetch = async () => {
        try {
            setloading(true)
            const { data, status } = await axios.get(`${serverOrders}/all-order`, { headers : { Authorization : token }})
            if (status === 200) {
                console.log(data)
                setorderdata(data)
                setloading(false)
            }
        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }


    const row = []


    orderdata && orderdata !== '' && orderdata.allorders.map((i) => {
        const { _id, user, orderStatus, promocode, subtotal, orderPayment } = i
        return row.push({ id: _id, user, orderStatus, promocode, subtotal, orderPayment })
    })

    const dltOrder = async (id) => {
        try {
            // setloading(true)
            const { data , status } = await axios.delete(`${serverOrders}/order-delete?id=${id}` , { headers : { Authorization : token}})
            if(status === 200){
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
        { field: 'id', headerName: 'Order ID', width: 150, flex: 1 },
        {
            field: 'orderStatus',
            headerName: 'Status',
            width: 150,
            flex: 0.6,
            cellClassName: (params) => {
                return params.row.status === 'Delivered' ? 'Greencolor' : 'Redcolor'
            }
        },
        { field: 'user', headerName: 'user ID', width: 150, flex: 1 },
        {
            field: 'subtotal',
            headerName: 'SubTotal',
            type: 'number',
            width: 150,
            flex: 0.5,
        },
        {
            field: 'promocode',
            headerName: 'promocode',
            width: 150,
            flex: 0.7,
        },
        {
            field: 'orderPayment',
            headerName: 'Paymemt Methods',
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
                        <button className=' hover:text-orange-700 text-xl' onClick={() => dltOrder(params.id)} ><MdDelete /></button>
                    </>
                )
            }
        },
    ]

    useEffect(() => {
        orderFetch()
    }, [change]);


    return (
        <div className='max-w-[500px] w-full sbnone md:w-full overflow-x-scroll'>
            {
                loading && <Loader/>
            }
            <Box className='w-[1000px] md:w-full '>
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

export default OrderAll