import React from 'react';
import ReactDOM from 'react-dom/client';
// yarn add bootswatch
import 'bootswatch/dist/minty/bootstrap.min.css';
import AppRoutes from './AppRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
