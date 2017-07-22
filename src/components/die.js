import React from 'react'

const Die = ({rolled}) => {
  return <div className='die'>
    <span className="rolled">{rolled}</span>
  </div>
}

export default Die