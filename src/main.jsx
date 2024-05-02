import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
// import {ToastContainer} from 'react-toastify'
import { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    
    <Provider store={store}>
      {/* <Toaster> */}
        <App />
      <Toaster/>
    </Provider>
   
  </BrowserRouter>
   
  //  </React.StrictMode>,
)
