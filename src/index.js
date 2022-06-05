import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App/App';
import MyRoutes from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
