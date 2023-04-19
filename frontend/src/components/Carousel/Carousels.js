import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './Carousels.css'
function Carousels(props) {
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        img:"https://img.jamesedition.com/listing_images/2023/03/10/09/03/13/0a4c9b81-558a-401a-8fec-da1d632072b9/je/2200xxsxm.jpg"
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        img:"https://img.jamesedition.com/listing_images/2023/02/15/10/09/57/f8661052-6cde-4261-a72b-b1f6d0ab140f/je/2000xxsxm.jpg"
    }
]
  return (
    <>
    <Carousel className='cc'  height={500}
    indicatorIconButtonProps={{
      style: {
          padding: '10px',    
          color: 'blue'       
      }
  }}
  activeIndicatorIconButtonProps={{
      style: {
          backgroundColor: 'red' 
      }
  }}
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
    <div className="low-bright">
      
    </div>
    <div className="shadow">
      <h1>The World's Luxurious MarketPlace</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est blanditiis tempore voluptatibus autem distinctio illum sapiente, esse aut possimus numquam.
      </p>
      
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
export default Carousels