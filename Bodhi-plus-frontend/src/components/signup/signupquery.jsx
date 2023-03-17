import './signupquery.css';
// import { auth } from '../../firebase'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { bounce } from 'react-animations';
//import styled, { keyframes } from 'styled-components';
function Signupquery() {

  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`; 

  return (
    <>
      <div className='signupquery-page'>
      <div className='signupquery1-box'>
         
            <div className='signupquery1-div'>
              <span className='signupquery1-text'><b>Sign up</b></span>
            </div>
            <div className='signupquerybtn1-div'>
              <Link to="/signupcustomer"><button className='signupquery1-btn'>Sign up as Customer</button></Link>
            </div>
          </div>
          <div className='signupquery2-box'>
         
         <div className='signupquery2-div'>
           <span className='signupquery2-text'><b>Sign up</b></span>
         </div>
         <div className='signupquerybtn2-div'>
           <Link to="/signupadmin"><button className='signupquery2-btn'>Sign up as Admin</button></Link>
         </div>
       </div>
        </div>
    </>
  );
}

export default Signupquery;