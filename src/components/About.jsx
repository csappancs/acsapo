import AWSLOGO from "../logos/aws-logo.png"
import BOOTSTRAPLOGO from "../logos/bootstrap-logo.png"
import CLOUDFLARELOGO from "../logos/cloudflare-logo.png"
import CSSLOGO from "../logos/css-logo.png"
import HTMLLOGO from "../logos/html5-logo.png"
import JSLOGO from "../logos/js-logo.webp"
import PYTHONLOGO from "../logos/python-logo.png"
import REACTLOGO from "../logos/react-logo.png"
import TAILWINDLOGO from "../logos/tailwind-logo.png"
import VERCELLOGO from "../logos/vercel-logo.png"
import GITHUBLOGO from "../logos/github.png"

import React from 'react'

export default function About() {
  return (
    <div className='main-container' id="about">
        <div className='about-title'>
            <h2>About Me</h2>
        </div>
        <div className='about-text'>
          <div>
                        <p>
            As a passionate web developer, I'm dedicated to pushing the boundaries of the digital world. My work revolves around implementing cutting-edge technologies to create online solutions that are not only aesthetically pleasing but also highly functional.
            <br />
            <br />
            My primary goal is to enhance the online presence and user experience of my clients through innovative web development. I take pride in crafting high-quality code and user-friendly designs, aiming to help clients achieve exceptional results in the digital realm.
            <br />
            <br />
            Web development is not just a job for me; it's a passionate calling. Navigating the online space and harnessing innovative technologies inspire me to shape the digital future. Achieving results and ensuring client satisfaction are my greatest motivators, propelling me to continually evolve and learn.
            <br />
            <br />
            As a web developer, my commitment to modern technologies drives my work. The web is my creative canvas, and I aspire to craft every project uniquely and efficiently in the digital realm.
            </p>
          </div>
          <div className='about-tech-logos'>
              <div className='logos'><img src={ AWSLOGO } alt="" /></div>
              <div className='logos'><img src={ BOOTSTRAPLOGO } alt="" /></div>
              <div className='logos'><img src={ CLOUDFLARELOGO } alt="" /></div>
              <div className='logos'><img src={ CSSLOGO } alt="" /></div>
              <div className='logos'><img src={ HTMLLOGO } alt="" /></div>
              <div className='logos'><img src={ JSLOGO } alt="" /></div>
              <div className='logos'><img src={ PYTHONLOGO } alt="" /></div>
              <div className='logos'><img src={ REACTLOGO } alt="" /></div>
              <div className='logos'><img src={ TAILWINDLOGO } alt="" /></div>
              <div className='logos'><img src={ VERCELLOGO } alt="" /></div>
              <div className='logos'><img src={ GITHUBLOGO } alt="" /></div>
          </div>
            <br />
          <div>
            <p className="text-under">
              I am currently working as a freelancer. I am available for hire.
            </p>
          </div>
        </div>
    </div>
  )
}
