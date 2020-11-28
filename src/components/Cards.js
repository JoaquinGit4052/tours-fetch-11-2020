import React, { useState, useEffect } from 'react'
import Card from './Card'

const Cards = ({ tours, deleteTour }) => {
  return (
    <>
      <h1>All tours</h1>
      <div className='cards-container'>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} deleteTour={deleteTour} />
        })}
      </div>
    </>
  )
}

export default Cards
