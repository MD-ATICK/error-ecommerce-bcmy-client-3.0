import Box from '@mui/material/Box';
import React , {useState , useEffect} from 'react'
import ProfileLeft from '../components/ProfileLeft'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { serverOrders } from '../server';


function Orders() {

    const [data, setdata] = useState('');

    const row = [
     
    ]

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
        { field: 'user', headerName: 'user ID', width: 150, flex: 0.7 },
        {
            field: 'subtotal',
            headerName: 'Total Price',
            type: 'number',
            width: 150,
            flex: 0.5,
        },
        {
            field: 'promocode',
            headerName: 'promocode',
            type: 'number',
            width: 150,
            flex: 0.7,
        },
        {
            field: 'orderPayment',
            headerName: 'Paymemt Methods',
            width: 150,
            flex: 0.7,
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

    const token = localStorage.getItem('token')

    const FetchMyorder = async () => {
        try {
            const { data , status } = await axios.get(`${serverOrders}/user-order` , { headers : { Authorization : `Bearer ${token}`}})
            if(status === 200){
                setdata(data)
            }
            
        } catch (error) {
        }
    }

    data && data !== '' && data.userorder.map((i) => {
        const { _id , orderStatus , subtotal , user , promocode , orderPayment } = i
        return row.push({ id : _id , orderStatus , subtotal , user , promocode , orderPayment })
    })

    useEffect(() => {
        FetchMyorder()
    }, []);

    return (
        <div className='flex items-center gap-x-8 h-[83vh] w-full'>
            <div className="left">
                <ProfileLeft />
            </div>
            <div className='right min-w-[1300px] '>
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

export default Orders





