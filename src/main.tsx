import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './providers/AuthProvider';
import { ThemeProvider } from './context/ThemeContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <BrowserRouter>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
