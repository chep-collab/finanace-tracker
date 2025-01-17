import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ExpenseList = () => {
    // Local state for category filtering
    const [categoryFilter, setCategoryFilter] = useState('');

    // Destructure transactions and dispatch from GlobalContext
    const { transactions, dispatch } = useContext(GlobalContext);

    // Filter transactions based on category
    const filteredTransactions = transactions.filter((t) =>
        categoryFilter ? t.category === categoryFilter : true
    );

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Transaction History</h2>

            {/* Category Filter Dropdown */}
            <div className="mb-4">
                <label className="block text-gray-700">Filter by Category</label>
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                >
                    <option value="">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Salary">Salary</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/* Transaction List */}
            <ul className="list-disc pl-6">
                {filteredTransactions.map((t) => (
                    <li key={t.id} className="mb-2 flex justify-between">
                        <span>{t.text}</span>
                        <span
                            className={`ml-4 ${
                                t.amount < 0 ? 'text-red-500' : 'text-green-500'
                            }`}
                        >
                            {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}
                        </span>
                        <button
                            onClick={() => {
                                // Remove the transaction
                                dispatch({ type: 'DELETE_TRANSACTION', payload: t.id });
                            }}
                            className="ml-4 text-sm text-red-500"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
