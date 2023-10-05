import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import './utils/i18n.utils.ts'
// import '../public/styles.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <App />
    <ToastContainer position='top-right' autoClose={4000} theme='light'></ToastContainer>
  </>
  // </React.StrictMode>,
)
