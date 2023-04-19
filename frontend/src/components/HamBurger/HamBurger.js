import React,{useEffect, useState} from 'react'
import LeftNav from '../LeftNav/LeftNav';
import './HamBurger.css'
import styled from 'styled-components';

const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: -0.5px;
left: -4px;
display: flex;
justify-content: space-around;
flex-flow:column  nowrap;
z-index: 20;
background-color: ${({burger}) => burger ? 'white' : 'transparent'} ;
padding:34px;
div{
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  cursor:pointer;
  background-color: ${({burger}) => burger ? 'black' : 'white'} ;
  transform-origin:19.5px;
  position:relative;
  top:-7px;
  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    background-color: ${({ open }) => open ? 'black' : ''};
    
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    background-color: ${({ open }) => open ? 'black' : ''};
  }
}
`;
const HamBurger = () => {
 const [open,setOpen] = useState(false);
 const [burger, setBurger] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setBurger(true)
    } else {
      setBurger(false)
    }
  }
  useEffect(() => {
    changeBackground()
    
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <>
   <StyledBurger burger={burger} open={open} onClick = {() => setOpen(!open) }>

        <div></div>
        <div></div>
        <div></div>

   </StyledBurger>
   <LeftNav open={open}/>
   </>
  )
}

export default HamBurger