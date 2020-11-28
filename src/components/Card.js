import React, { useState } from 'react'

const Card = ({ id, name, price, image, info, deleteTour }) => {
  const [moreInfo, setMoreInfo] = useState(false)
  return (
    <div className='card'>
      <img src={image} alt='tour image' />
      <div className='info-container'>
        <h2>
          {name} - <span className='price'> ${price}</span>
        </h2>
        <h5>
          {!moreInfo && info.substring(0, 200)}
          {moreInfo && info}
          <button
            type='btn'
            className='read-btn'
            onClick={() => setMoreInfo(!moreInfo)}>
            {moreInfo && 'Show less...'}
            {!moreInfo && 'Read more...'}
          </button>
        </h5>
        <button
          type='button'
          className='delete-btn'
          onClick={() => deleteTour(id)}>
          Delete tour
        </button>
      </div>
    </div>
  )
}

export default Card
