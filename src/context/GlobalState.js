import React, { createContext, useReducer, useEffect } from 'react';

// Initial state: transactions with category and date
const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
};

// Reducer to handle different actions
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            const updatedTransactions = [...state.transactions, action.payload];
            localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
            return { ...state, transactions: updatedTransactions };

        case 'DELETE_TRANSACTION':
            const filteredTransactions = state.transactions.filter(
                (t) => t.id !== action.payload
            );
            localStorage.setItem('transactions', JSON.stringify(filteredTransactions));
            return { ...state, transactions: filteredTransactions };

        case 'LOAD_TRANSACTIONS':
            return { ...state, transactions: action.payload };

        default:
            return state;
    }
};

// Create a context to be used throughout the app
export const GlobalContext = createContext(initialState);

// GlobalProvider component to provide state to the app
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
        if (storedTransactions) {
            dispatch({ type: 'LOAD_TRANSACTIONS', payload: storedTransactions });
        }
    }, []);

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
