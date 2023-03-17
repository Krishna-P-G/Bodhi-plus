import './signupAdmin.css';
// import { auth } from '../../firebase'
// import { useState } from 'react';
import { useStates } from '../../States';
//import { bounce } from 'react-animations';
//import styled, { keyframes } from 'styled-components';
function SignupAdmin() {

  const { setEmail1,setPassword1,pwerror1,mailerror1,setPhno,Phnoerror,AdminMatch,setName,Nameerror} 
  = useStates();

  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`; 

  return (
    <>
      <div className='signupadmin-page'>
          <div className='signupadmin-box'>
            <div className='signupadmin-div'>
              <span className='signupadmin-text'><b>Sign up</b></span>
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
    </>
  );
}

export default SignupAdmin;