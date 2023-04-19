import React from 'react'
import './Footer.css'
//import facebook from '../svg/facebook.svg'
//import instagram from '../svg/instagram.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='upper'>
            <div className='ul'>
                <div className='ulc'>
                  <div className='ulcu'><h5>Archon Estate</h5></div>
                  <h6>About</h6>
                  <h6>Content</h6>
                  <h6>Careers</h6>
                  <h6>Terms</h6>
                </div>
                <div className='ulc'>
                  <div className='ulcu'><h5>Categories</h5></div>
                  <h6>Real Estate</h6>
                  <h6>Car</h6>
                  <h6>Yatchs</h6>
                  <h6>jets</h6>
                  <h6>Watches</h6>
                  <h6>LifeStyle</h6>
                </div>
                <div className='ulc'>
                  <div className='ulcu'><h5>Catalogue</h5></div>
                  <h6>All Brands</h6>
                  <h6>All Businesses</h6>
                </div>
                <div className='ulc'>
                  <div className='ulcu'><h5>For Business</h5></div>
                  <h6>List With Us</h6>
                  <h6>Partner</h6>
                  <h6>Linking</h6>
                </div>
            </div>
            <div className='ur'>
            <div className='urc'>
                <div className='urcu'><h5> Settings</h5></div>
                  <div className='urcc'> English </div>
                  <div className='urcc'>Indian rupee - INR</div>
                  <div className='urcc'>Square Feet -ft2/Acr</div>
                </div>
            </div>
        </div>
            <div className='m'></div>
        <div className='l'>
                <div className='ll'></div>
                <div className='lr'>
                    <div className='social'></div>
                </div>
        </div>
    </div>
  )
}

export default Footer