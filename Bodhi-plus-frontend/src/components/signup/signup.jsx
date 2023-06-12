import './signup.css';
// import { auth } from '../../firebase'
// import { useState } from 'react';
import { useStates } from '../../States';
import { Link } from 'react-router-dom';

//import { bounce } from 'react-animations';
//import styled, { keyframes } from 'styled-components';
function Signup() {

  const { setEmail1,setName,Nameerror,setPhno,Phnoerror,mailerror1,pwerror1,setPassword1,AdminMatch,setEmail,setPassword,pwerror,unerror,mailerror,setUsername,setMobile,moberror,ClientMatch } 
  = useStates();

  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`; 

  return (
    <>
    <div className='signupadmin-page'>
          <div className='signupadmin-box'>
            <div className='signupadmin-div'>
              <span className='signupadmin-text'><b>Sign up as Admin</b></span>
            </div>

            <div className='name-div'>
              <span className='name-text'>Name</span>
              <input className='name-in' type='text' placeholder='Name' required
              onChange={(e) => setName(e.target.value)}></input>
              {Nameerror && <span className='nameerror-text'><b>{Nameerror}</b></span>}
            </div>
            
            <div className='phno-div'>
              <span className='phno-text'>Phone Number</span>
              <input className='phno-in' type='text' placeholder='Phone number' required
              onChange={(e) => setPhno(e.target.value)}></input>
              {Phnoerror && <span className='phnoerror-text'><b>{Phnoerror}</b></span>}
            </div>

            <div className='mail1-div'>
              <span className='mail1-text'>Email</span>
              <input className='mail1-in' type='mail' placeholder='Email' required
              onChange={(e) => setEmail1(e.target.value)}></input>
              {mailerror1 && <span className='mailerror1-text'><b>{mailerror1}</b></span>}
            </div>
            
            <div className='pw1-div'>
              <span className='pw1-text1'>Password</span>
              <input className='pw1-in1' type='password' placeholder='Password' required
              onChange={(e) => setPassword1(e.target.value)}></input>
              {pwerror1 && <span className='pwerror1-text'><b>{pwerror1}</b></span>}
              </div>

            <div className='signupbtn2-div'>
              <button className='signup-btn2' onClick={AdminMatch}>Sign up</button>
            </div>

          </div>
      </div>
      <div className='App-name-3'><b><span className='red-1'>IRON</span> FUSION </b></div>
      <div className='signupcustomer-page'>
          <div className='signupcustomer-box'>
          {/* <div>
          <span className='quote-1'> <b>Become the real you</b></span>

        </div> */}
            <div className='signupcustomer-div'>
              <span className='signupcustomer-text'><b>Sign up as Customer</b></span>
            </div>

            <div className='username-div'>
              <span className='username-text'>Username</span>
              <input className='username-in' type='text' placeholder='Username' required
              onChange={(e) => setUsername(e.target.value)}></input>
              {unerror && <span className='unerror-text'><b>{unerror}</b></span>}
            </div>
            
            <div className='mobile-div'>
              <span className='mobile-text'>Mobile Number</span>
              <input className='mobile-in' type='text' placeholder='Mobile number' required
              onChange={(e) => setMobile(e.target.value)}></input>
              {moberror && <span className='moberror-text'><b>{moberror}</b></span>}
            </div>

            <div className='mail2-div'>
              <span className='mail2-text'>Email</span>
              <input className='mail2-in' type='mail' placeholder='Email' required
                onChange={(e) => setEmail(e.target.value)}></input>
              {mailerror && <span className='mailerror-text'><b>{mailerror}</b></span>}
            </div>

            <div className='pw2-div'>

              <span className='pw2-text1'>Password</span>
              <input className='pw2-in1' type='password' placeholder='Password' required
                onChange={(e) => setPassword(e.target.value)}></input>
              {pwerror && <span className='pwerror-text'><b>{pwerror}</b></span>}
            </div>

            <div className='signupbtn-div'>
              <button className='signup-btn' onClick={ClientMatch}>Sign up</button>
            </div>

          </div>
      </div>
      <Link to="/">
      <div className="centered1">
      <button className="h-button1" data-text="Already have an account?">
        <span>Lets login into your account</span>
      </button>
      </div>
      </Link>
    </>
  );
}

export default Signup;