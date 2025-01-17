import React from 'react';
import { createRoot } from 'react-dom/client'; // New API
import './styles.css';
import App from './App';
import { GlobalProvider } from './context/GlobalState';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
);

