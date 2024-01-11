import React from 'react'
import Cvcards from '../components/micro/Cvcards.jsx'

export default function Cv() {
  return (
    <div className='main-container' id='cv'>
        <div className='cv-header'>
            <h2>My work experience</h2>
        </div>
        <div className='test-cv'>
            <div className='cv-container'>
                    <Cvcards company="Adaptive Recognition" position="Web developer" date="2012 - " description="I build and handle the webshop." link="https://adaptiverecognition.com"/>
                    <Cvcards company="turnkey events" position="Web developer" date="2012 - " description="I build and handle the webshop."/>
                    <Cvcards company="INV-Music Ltd." position="Web developer" date="2012 - " description="I build and handle the webshop."/>
                    <Cvcards company="Viktora Apartents" position="Web developer" date="2012 - " description="I build and handle the webshop."/>
                    <Cvcards company="Carpcentrum" position="Web developer" date="2012 - " description="I build and handle the webshop."/>
                    <Cvcards company="Hospioneer" position="Web developer" date="2012 - " description="I build and handle the webshop."/>
            </div>
        </div>
        <div>
          <a href="#" target='_blank'><button>Site</button></a>
        </div>
    </div>
  )
}
