import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import App from './App.jsx'

var root = ReactDOM.createRoot(document.getElementById('root'))
var h2 = <h2>i am in h2 tag now ;</h2>
var btn = <button>click me</button>

var div = <div>
    {h2}
    <h2>i am mansa</h2>
    <App/>
    {btn}
</div>

root.render(div);