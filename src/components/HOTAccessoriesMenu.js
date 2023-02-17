import React from 'react'
import {Link} from "react-router-dom"
import "../styles/HOTAccessoriesMenu.css"

const HOTAccessoriesMenu = () => {
  return (
    <div className="HOTAccessoriesMenu">
        <Link className="HOTAccessoriesMenuLink" to="/music">Music Store</Link>
        <Link className="HOTAccessoriesMenuLink" to="/smartDevice">Smart Devices</Link>
        <Link className="HOTAccessoriesMenuLink" to="/home">Home</Link>
        <Link className="HOTAccessoriesMenuLink" to="/lifestyle">Lifestyle</Link>
        <Link className="HOTAccessoriesMenuLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HOTAccessoriesMenu
