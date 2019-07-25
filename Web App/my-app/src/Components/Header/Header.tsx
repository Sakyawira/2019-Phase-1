// Import React
import * as React from 'react'

// Import css and make it availavle for any class to use
import './Header.css'

// Whenever it encounters Header, it will return  <h1 className='headerText'>How Old? 🤔</h1>
export default function Header() {
    return (
        <div className="header">
            <h1 className='headerText'>How Old? 🤔</h1>
        </div>
    )
}
