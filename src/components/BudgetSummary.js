import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const BudgetSummary = () => {
    const { transactions } = useContext(GlobalContext);

    const totalIncome = transactions
        .filter((t) => t.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0);
    const totalExpense = transactions
        .filter((t) => t.amount < 0)
        .reduce((acc, t) => acc + t.amount, 0);

    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-bold mb-4">Budget Summary</h2>
            <p>Total Income: <span className="text-green-500">${totalIncome.toFixed(2)}</span></p>
            <p>Total Expenses: <span className="text-red-500">${Math.abs(totalExpense).toFixed(2)}</span></p>
            <p>Remaining Balance: <span className="text-blue-500">${(totalIncome + totalExpense).toFixed(2)}</span></p>
        </div>
    );
};

export default BudgetSummary;
