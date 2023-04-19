import React from 'react'
import './ProductCarousel.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

function ProductCarousel(props) {
    var items = [
      {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          img:"https://img.jamesedition.com/listing_images/2023/03/06/14/00/38/e5a0d1f3-9416-4bf7-a2a5-2de645adf955/je/2200xxs.jpg"
      },
      {
          name: "Random Name #2",
          description: "Hello World!",
          img:"https://img.jamesedition.com/listing_images/2023/03/06/14/00/38/a22ab2e2-7f0f-434d-91ba-268fa0743ed7/je/2200xxs.jpg"
      }
  ]
    return (
      <>
      <Carousel className='cc'  height={350}
      
    
    indicatorContainerProps={{
        style: {
            marginTop: '150px', 
            textAlign: 'right' 
        }
  
    }}
      
    >
              {
                
                  items.map( (item, i) => <Item key={i} item={item} /> )
              }
  
              
      </Carousel>
      <div className="low-bright2">
        
      </div>
      <div className="mobile-view">
      <input className='mobile-save' type="button" value="Share" />
      <input className='mobile-photo' type="button" value="View Photos" />
        <input className='mobile-meet' type="button" value="Request Meet" />
      </div>
      <div className="shadow2">
        <input className='carousel-btn2' type="button" value="Save" />
        <input className='carousel-btn2' type="button" value="Share" />
        
      </div>
      <div className="details">
        <input className='carousel-btn-sec' type="button" value="View Photos" />
        <input className='carousel-btn-sec' type="button" value="Request Meet" />
        <input className='carousel-btn-sec' type="button" value="Map" />
      </div>
      </>
    )
  }
  function Item(props)
  {
      return (
          <Paper>
              {/* <h2>{props.item.name}</h2>
              <p>{props.item.description}</p> */}
              <img  src={props.item.img} alt="" />
  
              
          </Paper>
      )
  }
  export default ProductCarousel
