import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import GlobalStyles from './globalStyles'
import UserProvider from './Context/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <UserProvider>
      <Router />
      <ToastContainer autoClose={2000} />
    </UserProvider>
  </React.StrictMode>,
)
