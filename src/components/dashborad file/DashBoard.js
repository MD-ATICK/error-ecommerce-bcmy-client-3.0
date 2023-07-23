
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AiOutlineAreaChart } from 'react-icons/ai'

function DashBoard() {

    const data = [
        {
            name: 'a1',
            result: 45,
        },
        {
            name: 'a2',
            result: 59,
        },
        {
            name: 'a3',
            result: 56,
        },
        {
            name: 'a4',
            result: 52,        },
        {
            name: 'a5',
            result: 58,        },
        {
            name: 'a6',
            result: 44,        },
        {
            name: 'a7',
            result: 59,        },
    ];


    return (
        <div className='max-w-[1300px] mx-auto'>
            <h1 className='flex text-center items-center text-[16px] gap-x-2 py-2 px-6 w-[300px] ml-4 text-white my-8 bg-[#622d60] rounded-lg'> <AiOutlineAreaChart className='text-[28px]' /> Assainmnet Result</h1>
            <div className=' h-[300px] md:h-[65vh] my-12 md:mx-20'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="result" stroke="#3c1b3b" fill="#622d60" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DashBoard