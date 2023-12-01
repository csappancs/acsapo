import React from 'react';

export default function Cvcards({ company, position, date, description, link }) {
  return (
    <div className='cvcard-container'>
      <div className='cvcard-title'>
       <h3>{company}</h3>
      </div>
      <hr />
      <h6>{position}</h6>
      <p>{date}</p>
      <p>{description}</p>
      <a href={ link } target='_blank'><button>Site</button></a>
    </div>
  );
}
