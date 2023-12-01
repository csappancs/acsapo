import React from 'react'

export default function Portfoliocard({projectname, projectdescription, projecttags, projectlink, buttontext}) {
  return (
        <div className='portfolio-card'>
            <div className='portfolio-card-title'>
                <h3>{ projectname }</h3>
            </div>
            <hr />
            <div className='portfolio-card-description'>
                <p>{ projectdescription }</p>
            </div>
            <div className='portfolio-card-links'>
                <p>{ projecttags }</p>
            </div>
            <div className='portfolio-card-link'>
                <a href={ projectlink }><button>{ buttontext }</button></a>
            </div>
        </div>
  )
}
