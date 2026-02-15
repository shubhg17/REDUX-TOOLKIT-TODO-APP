import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {Provider} from "react-redux"
import {store} from "./app/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  //first react.strictmode hatao then provider se wrap kro aur idhar bhi same concept use hoga contextapi ka ki iss provider ko value deni padegi but yaha hume value ki jagah prop ko store bolte hain aur uski value prop ki voh bhi humne store hi diya hain 
  <Provider store={store}>
    <App />
  </Provider>
)
