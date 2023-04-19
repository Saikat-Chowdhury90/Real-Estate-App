import React from "react";
import "./NewTrending.css";
import { Link } from 'react-router-dom'
const handleLeftClick = () => {
  const cardSlider = document.querySelector(".card-slider");
  const cardWidth = document.querySelector(".card").offsetWidth;
  const cardMargin = parseInt(
    getComputedStyle(document.querySelector(".card")).marginRight
  );
  const cardSliderWidth = cardSlider.offsetWidth;
  const cardSliderMargin = parseInt(getComputedStyle(cardSlider).marginLeft);
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
  const cardSlider = document.querySelector(".card-slider");
  const cardWidth = document.querySelector(".card").offsetWidth;
  const cardMargin = parseInt(
    getComputedStyle(document.querySelector(".card")).marginRight
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

const NewTrending = () => {
  return (
    <div className="new-trending-section">
      <div className="new-trending-title">
        <h2 className="heading-primary">New &amp; Trending</h2>
        <div className="card-slider-controls">
          <button className="left-button" onClick={handleLeftClick}>
            &#10094;
          </button>
          <button className="right-button" onClick={handleRightClick}>
            &#10095;
          </button>
        </div>
      </div>
      <div className="card-slider-container">
        <div className="card-slider-wrapper">
          
          <div className="card-slider">
          <Link to="/product_details" style={{ color: 'inherit', textDecoration: 'inherit'}}><div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/02/28/16/14/09/148e5ddf-dbbe-46c9-91d5-fb9861304f26/je/350x380xcxm.jpg"
                alt="product1"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div></Link>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/03/01/14/04/12/101abfa7-b913-437f-be05-3b9f729ebe3d/je/350x380xcxm.jpg"
                alt="product2"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/02/28/11/41/48/acb0fd12-aca1-4ec8-86c1-86a06771e7d8/je/350x380xcxm.jpg"
                alt="product3"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/01/27/15/40/57/eb86f92c-e827-4212-922a-1eb0b4c62aef/je/350x380xcxm.jpg"
                alt="product4"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/02/28/16/14/08/322904c3-320e-4015-a94d-f51782ebedf3/je/350x380xcxm.jpg"
                alt="product5"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/02/28/16/14/08/322904c3-320e-4015-a94d-f51782ebedf3/je/350x380xcxm.jpg"
                alt="product5"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/02/28/16/14/08/322904c3-320e-4015-a94d-f51782ebedf3/je/350x380xcxm.jpg"
                alt="product5"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/02/28/16/14/08/322904c3-320e-4015-a94d-f51782ebedf3/je/350x380xcxm.jpg"
                alt="product5"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/02/28/16/14/08/322904c3-320e-4015-a94d-f51782ebedf3/je/350x380xcxm.jpg"
                alt="product5"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="card">
              <div className="heart-icon">
                <span>&#9825;</span>
              </div>
              <img
                src="https://img.jamesedition.com/listing_images/2023/02/28/16/14/08/d2ed0d9e-e74f-4347-b697-af5612b6d820/je/350x380xcxm.jpg"
                alt="product5"
              />
              <div className="card-details">
                <p>Price: 99,000 /-</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTrending;
