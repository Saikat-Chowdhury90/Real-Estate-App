import React from 'react'
import Carousels from '../../components/Carousel/Carousels'
import NavBar from '../../components/NavBar/NavBar'
import NewTrending from '../../components/NewTrending/NewTrending'
import PopularSearch from '../../components/PopularSearches/PopularSearch'
import './RealEstate.css'
const RealEstate = () => {
  return (
    <div className='real-estate-container'> 
        <NavBar/>
        <Carousels/>
        <PopularSearch/>
        <NewTrending/>
        
    </div>
  )
}

export default RealEstate