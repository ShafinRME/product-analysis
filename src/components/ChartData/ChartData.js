import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const ChartData = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('chart.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [datas]);
    return (
        <div>
            {
                datas.map(data => <Dashboard
                    data={data}
                ></Dashboard>)
            }

        </div>
    );
};

export default ChartData;