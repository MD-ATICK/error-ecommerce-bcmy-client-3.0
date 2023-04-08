import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FcComboChart } from 'react-icons/fc'

function DashBoard() {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ]

    return (
        <div className='w-full h-[92vh] grid place-items-center   items-center !bg-[#50264e]'>
            <h1 className='text-center text-[30px] mt-4 font-[600] text-white flex items-center gap-x-4'><FcComboChart className='text-[60px]'/>  Line Chart of Income </h1>
            <div className='h-[500px] w-[700px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#d6d6d6" />
                        <XAxis dataKey="name" stroke="#00b3f4" />
                        <YAxis stroke="#1ede00" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#1ede00" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#00b3f4" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

}

export default DashBoard


