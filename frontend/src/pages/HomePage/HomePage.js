import React from 'react'
import { useSelector } from 'react-redux'
import Carousels from '../../components/Carousel/Carousels'
import FeaturedCategoriesComponent from '../../components/FeaturedCategories/FeaturedCategories'
import NavBar from '../../components/NavBar/NavBar'

import NewTrending from '../../components/NewTrending/NewTrending'

const HomePage = () => {
  
  return (
    <div className='HomePage'>
        <NavBar/>
        <Carousels/>
        <FeaturedCategoriesComponent/>
        <NewTrending/>
        
    </div>
  )
}

export default HomePage