import Box from '@mui/material/Box';
import React from 'react'
import ProfileLeft from '../components/ProfileLeft'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

function TrackOrder() {

    const row = [
        { id: '4fs5gf54dg5ds4d5r5v5', status: 'Processing', itemqty: 10, price: 9999 },
        { id: '4fs5gf54dg5ds4d5r5v5sg', status: 'Delivered', itemqty: 10, price: 9999 }
    ]

    const columns = [
        { field: 'id', headerName: 'Product ID', width: 150, flex: 1 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            flex: 0.8,
            cellClassName: (params) => {
                return params.row.status === 'Delivered' ? 'Greencolor' : 'Redcolor'
            }
        },
        {
            field: 'itemqty',
            headerName: 'Item Quantity',
            type: 'number',
            width: 150,
            flex: 0.5,
        },
        {
            field: 'price',
            headerName: 'Total Price',
            type: 'number',
            width: 150,
            flex: 0.5,
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
                        <Link className='hover:text-purple-700 text-xl text-right' to={`/products/${params.id}`}><AiFillEdit /></Link>
                        <button className=' hover:text-purple-700 text-xl'  ><MdDelete /></button>
                    </>
                )
            }
        },
    ]

    return (
        <div className='abc'>
            <div className="left w-full">
                <ProfileLeft />
            </div>
            <div className='right w-full '>
                <Box>
                    <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={12}
                        className='MyOrders'
                        autoHeight
                        disableSelectionOnClick
                    />
                </Box>
            </div>
        </div>
    )
}

export default TrackOrder