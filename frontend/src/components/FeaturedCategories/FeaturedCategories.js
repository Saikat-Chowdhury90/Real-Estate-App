import React, { useEffect } from "react";
import "./FeaturedCategories.css";
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'
const FeaturedCategoriesComponent = () => {
  useEffect(() => {
    Aos.init({duration : 2000})
  }, [])
  
  return (
    <div className="featured-categories-section">
      <div className="featured-categories-title">
        <h2 className="heading-primary">Featured Categories</h2>
      </div>
      <div className="featured-categories-card-slider-container">
        <div className="featured-categories-card-slider-wrapper">
          <div className="featured-categories-card-slider">
            <div data-aos='fade-right' className="featured-categoires--card">
            <Link to="/real" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <img
                src="https://static-x.jamesedition.com/assets/popular_categories/real_estate-7a4a7367b1d6b97d9d7dbdb8d57f85a51fa898a677e6089ba3655e288d22a6e5.jpg"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Real State</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
              </Link>
            </div>
            <div data-aos='fade-left' className="featured-categoires--card">
              <img
                src="https://static-x.jamesedition.com/assets/popular_categories/cars-5bb2092e58079f93ea6e7729be57515f1601e0b959e82603d6d0d14e78c3d2a7.jpg"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Cars</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
            <div data-aos='fade-right' className="featured-categoires--card">
              <img
                src="https://static-x.jamesedition.com/assets/popular_categories/yachts-4b4b2c8f828090f5777414d801801581c0703feaec89fde2ff26ca03c7fd1fd8.jpg"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Yachts</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
            <div  data-aos='fade-left' className="featured-categoires--card">
              <img
                src="https://static-x.jamesedition.com/assets/popular_categories/jets-db92caef80c84457403908cab6cc3694414fa678ff2a30a202ba7fecbc4ff376.jpg"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Jets</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
            <div data-aos='fade-right' className="featured-categoires--card">
              <img
                src="https://images.unsplash.com/photo-1588627541420-fce3f661b779?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">MotorCycles</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
            <div  data-aos='fade-left' className="featured-categoires--card">
              <img
                src="https://images.unsplash.com/photo-1558597576-f1a962543f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlbGljb3B0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
                alt="product1"
              />
              <div className="featured-categories-card-details">
                <p className="real-state--text">Helicopters</p>
                <p className="real-state--listings"> 210,000 Listings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategoriesComponent;
