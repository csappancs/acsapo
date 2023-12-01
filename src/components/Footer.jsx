import React from 'react'

const currentYear = new Date().getFullYear();

export default function Menubar() {
  return (
    <footer className='footer'>
        <p> { currentYear } - Copyright. Adam Csapo</p>
    </footer>
  )
}
