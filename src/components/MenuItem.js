import React from 'react'

function MenuItem({image, name, email, linkedin, work, tools}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})` }}> </div>
        <h2> {name} </h2>
        <h3> {work} </h3>
        <h4> {tools} </h4>
        <p> {email} </p>
        <p> {linkedin} </p>
    </div>
  );
}

export default MenuItem;