import './loginCustomer.css';
import { auth, provider } from "../../firebase";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStates } from '../../States';
import { BsGoogle } from 'react-icons/bs'

function LoginCustomer() {

  // UseStates
  const { setEmail, setPassword, mailerror, pwerror , logincheck} = useStates();
  
  const [user, setUser] = useState(null);
  

  // To enable google login
  const googleLogin = async () => {
    try {
      await auth.signInWithPopup(provider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);
  return (
    <>
      <div className='login-page-patient'>
      <span className='App-name-2'><b>Bodhi Plus</b></span>
        <div className='login-box1'>
          
          <div className='login-div1'>
            <span className='login-text1'><b>   Sign in as Patient </b></span>
          </div>

          <div className='mail-div1'>
            <span className='mail-text1'>Email</span>
            <input className='mail-in1' type='mail' placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}></input>
              {mailerror && <span className='mailerror-text-login1'><b>{mailerror}</b></span>}
          </div>

          <div className='pw-div1'>
            <span className='pw-text1'>Password</span>
            <input className='pw-in1' type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}></input>
              {pwerror && <span className='pwerror-text-login1'><b>{pwerror}</b></span>}
          </div>

          <div className='loginbtn-div1'>
            <button className='login-btn1' onClick={logincheck}>Sign In</button>
          </div>

          <div className='signuplink-div1'>
            <span className='signuplink-txt11'>Not a member ?</span>
            <Link to='/signupquery'>
              <span className='signuplink-txt21'><u>Sign up now</u></span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default LoginCustomer;