import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { serverEvents } from '../../server';
import Loader from '../../pages/Loader';
import { FaSleigh } from 'react-icons/fa';

function EventAll() {

    const row = []
    const [eventdata, seteventdata] = useState('');
    const [change, setchange] = useState(false);
    const [loading, setloading] = useState(false);

    const eventFetch = async () => {
        try {
            setloading(true)
            const { data, status } = await axios.get(`${serverEvents}/events`, { withCredentials: true })
            if (status === 200) {
                console.log(data)
                seteventdata(data)
                setloading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    eventdata && eventdata !== '' && eventdata.events.map((i) => {
        const { _id, user, price, stock, name , enddate , startdate , discount } = i
        return row.push({ id: _id, user, price : `$${price}` , stock, name , enddate , startdate , discount :  `$${discount}` })
    })

    const dltevent = async (id) => {
        try {
            setloading(true)
            const { data , status } = await axios.delete(`${serverEvents}/events?id=${id}` , {withCredentials : true})
            if(status === 200){
                console.log(data)
                setchange(true)
                setloading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const columns = [
        { field: 'id', headerName: 'event ID', width: 150, flex: 1 },
        {
            field: 'name',
            headerName: 'Product Name',
            width: 150,
            flex: 0.7,
        },
        { field: 'user', headerName: 'user ID', width: 150, flex: 1 },
        {
            field: 'startdate',
            headerName: 'Event Start',
            width: 150,
            flex: 0.6,
            // cellClassName: (params) => {
            //     return params.row.status === 'Delivered' ? 'Greencolor' : 'Redcolor'
            // }
        },
        {
            field: 'enddate',
            headerName: 'Event End',
            width: 150,
            flex: 0.6,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
            flex: 0.4,
        },
        {
            field: 'discount',
            headerName: 'D-Price',
            width: 150,
            flex: 0.4,
        },
        {
            field: 'action',
            headerName: 'Action',
            type: 'number',
            width: 150,
            flex: 0.3,
            cellClassName: 'iconsize',
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link className='hover:text-orange-700 text-xl text-right' to={`/event/${params.id}`}><AiFillEdit /></Link>
                        <button className=' hover:text-orange-700 text-xl' onClick={() => dltevent(params.id)} ><MdDelete /></button>
                    </>
                )
            }
        },
    ]

    useEffect(() => {
        eventFetch()
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

export default EventAll