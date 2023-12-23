import React from 'react'
import ReactDOM from 'react-dom/client'
// import.meta.env;
// dotenv.config();
// console.log()
// console.log(process.env.REACT_APP_SERVICE_ID)
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
