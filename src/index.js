import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Error from '../src/components/ErrorPage'
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Error/> */}
    <App/>
  </React.StrictMode>
);


