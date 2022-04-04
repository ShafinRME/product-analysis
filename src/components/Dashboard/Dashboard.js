import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css"

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='chart'>
            <div>
                <LineChart width={600} height={500} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'sell'}></YAxis>
                    <Tooltip />
                    <Legend />

                </LineChart>
            </div>
            <div>
                <BarChart width={600} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="investment" stackId="a" fill="red" />
                    <Bar dataKey="revenue" stackId="a" fill="green" />
                    <XAxis dataKey={"month"} />
                    <YAxis dataKey={"investment"} />

                    <Tooltip />
                    <Legend />


                </BarChart>
            </div>
            <div>
                <PieChart width={600} height={500}>
                    <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={180} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={190} outerRadius={220} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>
            <div>
                <AreaChart width={600} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis dataKey={"investment"} />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Tooltip />

                </AreaChart>
            </div>
        </div>

    );
};

export default Dashboard;