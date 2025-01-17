import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { dispatch } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(),
            text,
            amount: parseFloat(amount),
        };

        dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });
        setText('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Add New Transaction</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Amount (positive for income, negative for expense)</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;
