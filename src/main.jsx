import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './Routers/MainRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='text-white font-Normal'>
      <RouterProvider router={MainRouter}></RouterProvider>
    </div>
  </React.StrictMode>,
)
