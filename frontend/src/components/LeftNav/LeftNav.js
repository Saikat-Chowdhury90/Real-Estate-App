import React from 'react';
import './LeftNav.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: -20px;
    left:0;
    height: 100vh;
    width: 250px;
    padding-top: 7.5rem;
    transition: transform 0.3s ease-in-out;
    background-color:white;
   

    li
    {
      padding: 1.5rem 0 1.5rem 0;
      padding-left:5rem;
      cursor:pointer;
      color:black;
    }
    
`;
const LeftNav = ({ open }) => {
  const handleDropdownClick = (event) => {
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.classList.toggle('show');
  };
  // var dropdown = document.querySelector(".dropdown-btn");
  // var i;

  // for(i = 0; i< dropdown.length;i++)
  // {
  //   dropdown[i].addEventListener("click" , function() {
  //     var dropdownContent = this.nextElementSibling;
  //   if (dropdownContent.style.display === "block") {
  //     dropdownContent.style.display = "none";
  //   } else {
  //     dropdownContent.style.display = "block";
  //   }
  //   });
  // }

  return (
    <div className='left-nav'>

      <UL open={open}>
        <li>HOME</li>
        <li className="dropdown">
          <li to="/" onClick={handleDropdownClick} className='dropdown-btn'>CATAGORIES<i onClick={handleDropdownClick} class="fa fa-caret-down"></i></li>
          <div className="dropdown-content">
            <li>Real Estate</li>
            <li>Cars</li>
            <li>Watches</li>
            <li>Yatchs</li>
            <li>Jets</li>
            <li>Motorcycles</li>
            <li>Helicopter</li>
            <li>Jewelery</li>
          </div>
        </li>
        {/* <li> <button id='dropdown-btn' className="dropdown-btn">CATAGORIES  <i class="fa fa-caret-down"></i></button></li>
          <div className="dropdown-container">
            <li>Real Estate</li>
            <li>Cars</li>
            <li>Watches</li>
            <li>Yatchs</li>
            <li>Jets</li>
            <li>Motorcycles</li>
            <li>Helicopter</li>
            <li>Jewelery</li>
          </div> */}
        <li>CONTACT</li>
        <li>HELP</li>
        <li>PROFILE</li>
      </UL>

    </div>

  )
}

export default LeftNav