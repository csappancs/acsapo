import React from 'react'
import Portfoliocard from '../components/micro/Portfoliocard.jsx'

export default function Portfolio() {
  return (
    <div className='main-container' id='portfolio'>
        <div className='portfolio-title'>
            <h2>My fav projects</h2>
        </div>
        <div className='portfolios'>
            <Portfoliocard projectname="Currency Changer" projectdescription="Lorem ipsum dolor sit amet." projecttags="#python #wp" projectlink="https://google.com/" buttontext="Try it"/>
            <Portfoliocard projectname="AWS Env setup" projectdescription="Lorem ipsum dolor sit amet." projecttags="#aws #react" projectlink="https://google.com/" buttontext="Check this out"/>
            <Portfoliocard projectname="Deloy app with Vercel" projectdescription="Lorem ipsum dolor sit amet." projecttags="#vercel #aws #react" projectlink="https://google.com/" buttontext="I loved this"/>
        </div>
    </div>
  )
}
