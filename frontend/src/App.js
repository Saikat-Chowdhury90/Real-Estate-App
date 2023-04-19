import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/HomePage/HomePage';
import RealEstate from './pages/RealEstate/RealEstate';
import Footer from './components/Footer/Footer';
import LoginComponent from './components/LoginComponent/LoginComponent';
import ProductLanding from './pages/ProductLanding/ProductLanding';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import RegisterComp from './components/Register/RegisterComp';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      
      <Routes>
        <Route exact path='/' element={< HomePage />}></Route>
        <Route exact path='/real' element={< RealEstate />}></Route>
        <Route exact path='/login' element={< LoginComponent />}></Route>
        <Route exact path='/product' element={<ProductLanding />}></Route>
        <Route exact path='/product_details' element={<ProductDetails />}></Route>
        <Route exact path='/register' element={<RegisterComp/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
