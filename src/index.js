import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Store from './ReduxStore/ReduxStore';
import { ToastContainer, toast } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Toaster
      position="top-right"
      reverseOrder={false} />
  </>

);

