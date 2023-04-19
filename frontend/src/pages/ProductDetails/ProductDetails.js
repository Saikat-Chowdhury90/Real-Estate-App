import React from 'react'
import './ProductDetails.css'
import NavBar from '../../components/NavBar/NavBar'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import NewTrending from '../../components/NewTrending/NewTrending'
const ProductDetails = () => {
  return (
    <div className='product-container'>
      <NavBar />
      <ProductCarousel />
      <div className="product-container-content">
        <div className="left">
          <div className="product-container-title">
            <h1>Beautiful Penthouse in Nueva Andalusia</h1>
            <h1>₹ 109,876,801</h1>
          </div>
          <div className="product-container-details">
            <p>3 Beds . 2 Baths . 1,669 sqft . ₹65,857/sqft</p>
            <p>This beautiful Scandinavian style luxury penthouse is south facing in Nueva Andalucia.
              The view is spectacular! <br />
              The flat has 3 bedrooms and 2 bathrooms, an open plan living area, terraces and the possibility to build a solarium.<br />
              The urbanization has a heated pool, tennis court, fitness centre, and underground parking.</p>
            <p className="listing-history-details">
              Listed Mar 07 .
              Views 203 .
              Saves 9


            </p>
          </div>

          <hr />
          <div className="product-glimpses">
            <div className="glimpses-title">
              <h1>Glimpses</h1>
            </div>
            <div className="glimpses-container">

            </div>
          </div>
          <hr />
          <div className="product-features">
            <div className="features-title">
              <h1>Features</h1>
            </div>
            <div className="features-container">
              <p><span><i class="fa-solid fa-water-ladder"></i></span>pool</p>
              <p><span><i class="fa-solid fa-stairs"></i></span>Terrace</p>
              <p><span><i class="fa-solid fa-mountain-sun"></i></span>Mountain View</p>
              <p><span><i class="fa-solid fa-dumbbell"></i></span>Fitness Center/Gym</p>
              <p><span><i class="fa-solid fa-table-tennis-paddle-ball"></i></span>Tennis Court</p>
              <p><span><i class="fa-solid fa-spoon"></i></span>Outdoor Kitchen</p>
              <p><span><i class="fa-solid fa-kitchen-set"></i></span>Kitchen island</p>
              <p><span><i class="fa-regular fa-sun"></i></span>Balcony</p>
            </div>
          </div>
          <hr />
          {/* <div className="product-question">
            <div className="product-question-title">
              <h1>Ask a Question</h1>
            </div>
            <div className="estate-title">
              <p>AQUAREL - Finest Estates</p>
            </div>
            <div className="product-desc">
              <textarea name="ask" id="ask" cols="80" rows="10" placeholder='Ask The Agent For More Information...'></textarea>
            </div>
            <div className="ask-button">
              <input type="button" value="Ask a question" className='ask-btn' />
            </div>


          </div> */}
          {/* <hr /> */}
          {/* <div className="product-map">
            <div className="product-map-title">
              <h1>Explore the Area</h1>
            </div>
          </div> */}
          <hr />
          <div className="product-about">
            <div className="product-about-title">
              <h1>About the Building</h1>
            </div>
            <div className="property-type">
              <p className='property-type-title'>Property type</p>
              <p>Penthouse</p>
            </div>
          </div>
          <hr />
          <div className="listing-by">
            <div className="listing-by-title">
              <h1>Listed by</h1>
            </div>
            <div className="listed-by-details">
              <p className="property-type-title">AQUAREL - Finest Estates</p>
              <br />
              <p className="property-type-title">Registered on Archon Estate</p>
              <p>2020</p>
              <br />
              <p className="property-type-title">Address</p>
              <p>Marbella</p>
              <br />
              <p className="property-type-title">Phone number</p>
              <p>Show phone number</p>
              <br />
              <p className="property-type-title">Listing Reference</p>
              <p>570-00324P</p>
            </div>
          </div>
        </div>
        <div className="right">
            <div className="right-form">
              <form  action="">
                <div className="form-title">
                  <h3>Contact Agent</h3>
                  <hr />
                </div>
                <hr />
                <input type="text" name="name" id="name" placeholder='Name' />
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="number" name="number" id="number"  placeholder='Phone number'/>
                <textarea name="" id="" cols="40" rows="5" placeholder='Message'></textarea>
                <input type="button" className='ask-btn' value="REQUEST MEET" />
              </form>
            </div>
        </div>
        

      </div>
      <hr />
      <NewTrending />
    </div>
  )
}

export default ProductDetails