import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js';
import { GlobalContext } from '../context/GlobalState';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const ChartDisplay = () => {
    const { transactions } = useContext(GlobalContext);

    const chartData = {
        labels: transactions.map((t) => t.text),
        datasets: [
            {
                label: 'Amount',
                data: transactions.map((t) => t.amount),
                backgroundColor: transactions.map((t) => (t.amount < 0 ? 'red' : 'green')),
            },
        ],
    };

    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Spending Chart</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default ChartDisplay;
