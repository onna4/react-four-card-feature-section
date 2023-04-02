import React from 'react'


function Card(props) {

  return (
    <article className='card'>
      <h1 className='cardHead'>{props.heading}</h1>
      <p className='paragraph'>{props.paragraph}</p>
      <img src={props.image} alt={props.alt} />
    </article>
  )
}

export default Card
