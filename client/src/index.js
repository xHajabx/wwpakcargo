import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'


// error arises from requiring express 
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000; 

// app.get('/', (req, res) => {
//     res.send('hello world'); 
// }); 



const root = createRoot(document.getElementById('root')); 
root.render(<Router> <App /> </Router>);

// app.listen(port, () => console.log(`Listening on port ${port}`)); 

// app.get('/express_backend', (req, res) => {
//     res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTECD TO REACT' }); 
// }); 