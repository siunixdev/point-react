import React from 'react'
import './Card.sass'

const Card = ({ body: body }) => {
  return (
    <div className={`card`}>{body}</div >
  )
}

export default Card