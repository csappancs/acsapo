import "./Sidebar.css"
import React from 'react'
import Image from "../assets/adam_csapo.jpeg"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div>
            <img src={Image} alt="" />
        </div>
        <div className="sidebar-menu">
            <ul>
                <li>About</li>
                <li>Portfolio</li>
                <li>Schools</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>

        </div>
    </div>
  )
}
