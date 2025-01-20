// react
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// components
import App from './App.tsx';
// styles
import './index.css';
// providers
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);
