import React from 'react'
import './PopularSearch.css'
import { Link } from 'react-router-dom'
const handleLeftClick = () => {
  const cardSlider = document.querySelector(".popular-card-slider");
  const cardWidth = document.querySelector(".popular-card").offsetWidth;
  const cardMargin = parseInt(
    getComputedStyle(document.querySelector(".popular-card")).marginRight
  );
  // const cardSliderWidth = cardSlider.offsetWidth;
  // const cardSliderMargin = parseInt(getComputedStyle(cardSlider).marginLeft);
  const currentPosition = Math.abs(
    parseInt(getComputedStyle(cardSlider).transform.split(",")[4])
  );
  const newPosition = currentPosition - cardWidth - cardMargin;
  if (newPosition >= 0) {
    cardSlider.style.transform = `translateX(-${newPosition}px)`;
  } else {
    cardSlider.style.transform = `translateX(0)`;
  }
};
const handleRightClick = () => {
  const cardSlider = document.querySelector(".popular-card-slider");
  const cardWidth = document.querySelector(".popular-card").offsetWidth;
  const cardMargin = parseInt(
    getComputedStyle(document.querySelector(".popular-card")).marginRight
  );
  const cardSliderWidth = cardSlider.offsetWidth;
  const cardSliderMargin = parseInt(getComputedStyle(cardSlider).marginLeft);
  const currentPosition = Math.abs(
    parseInt(getComputedStyle(cardSlider).transform.split(",")[4])
  );
  const newPosition = currentPosition + cardWidth + cardMargin;
  if (newPosition <= cardSliderWidth - cardSliderMargin - cardWidth) {
    cardSlider.style.transform = `translateX(-${newPosition}px)`;
  } else {
    cardSlider.style.transform = `translateX(-${
      cardSliderWidth - cardSliderMargin - cardWidth
    }px)`;
  }
};


const PopularSearch = () => {
 


  return (
    <div className='popular-search-container'>
        <div className="popular-search-title">
            <h2 className="heading-primary">Popular Searches</h2>
            <div className="card-slider-controls">
          <button className="left-button" onClick={handleLeftClick} >
            &#10094;
          </button>
          <button className="right-button" onClick={handleRightClick} >
            &#10095;
          </button>
        </div>
        </div>
        <div className="popular-content">
           <div className="popular-card-slider">
              <div className="popular-1">
              <Link to="/product" style={{ color: 'inherit', textDecoration: 'inherit'}}><div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                         
                      </div>
                  </div></Link>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                 
                 
                  
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
              </div>
              <div className="popular-2">
              <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
                  <div className="popular-card">
                      <div className="image-section">
                        <img src='https://img.jamesedition.com/listing_images/2022/02/18/12/22/32/9b9ab422-9885-42e1-a2b7-1163833dc2b7/je/355x210xc.jpg' alt='home'/>
                      </div>
                      <div className="popular-desc">
                        
                      </div>
                      <div className="small-arrow">
                        
                      </div>
                  </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default PopularSearch