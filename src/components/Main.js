import React, { useState, useEffect } from 'react'
import Cards from './Cards'

const url = 'https://course-api.com/react-tours-project'

const Main = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id != id
    })

    setTours(newTours)
  }

  const getTours = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTours()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (tours.length == 0) {
    return (
      <>
        <h1>No tours left</h1>
        <div className='cards-container'>
          <button
            type='button'
            className='refresh-btn'
            onClick={() => getTours()}>
            Refresh tours
          </button>
        </div>
      </>
    )
  }
  return <Cards tours={tours} deleteTour={deleteTour} />
}

export default Main
