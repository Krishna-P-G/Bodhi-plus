import './login.css';
import { auth, provider } from "../../firebase";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStates } from '../../States';
import { BsGoogle } from 'react-icons/bs'

function Login() {

  // UseStates
  const { setEmail1,mailerror2, setPassword1, setEmail, setPassword, pwerror2, admincheck, mailerror3, pwerror3 , customercheck} = useStates();
  
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
      <div className='login-page-Admin'>
        <div className='login-box2'>
          
          <div className='login-div2'>
            <span className='login-text2'><b>   Sign in as Admin   </b></span>
          </div>

          <div className='mail-div2'>
            <span className='mail-text2'>Email</span>
            <input className='mail-in2' type='mail' placeholder='Email'
              onChange={(e) => setEmail1(e.target.value)}></input>
              {mailerror2 && <span className='mailerror-text-login2'><b>{mailerror2}</b></span>}
          </div>

          <div className='pw-div2'>
            <span className='pw-text2'>Password</span>
            <input className='pw-in2' type='password' placeholder='Password'
              onChange={(e) => setPassword1(e.target.value)}></input>
              {pwerror2 && <span className='pwerror-text-login2'><b>{pwerror2}</b></span>}
          </div>

          <div className='loginbtn-div2'>
            <button className='login-btn2' onClick={admincheck}>Sign In</button>
          </div>

        </div>
      </div>
      <div className='App-name-2'><b>IRON <span className='red-1'>FUSION</span></b></div>
      <div className='login-page-customer'>
        <div className='login-box1'>
          
          <div className='login-div1'>
            <span className='login-text1'><b>   Sign in as Customer </b></span>
          </div>

          <div className='mail-div1'>
            <span className='mail-text1'>Email</span>
            <input className='mail-in1' type='mail' placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}></input>
              {mailerror3 && <span className='mailerror-text-login1'><b>{mailerror3}</b></span>}
          </div>

          <div className='pw-div1'>
            <span className='pw-text1'>Password</span>
            <input className='pw-in1' type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}></input>
              {pwerror3 && <span className='pwerror-text-login1'><b>{pwerror3}</b></span>}
          </div>

          <div className='loginbtn-div1'>
            <button className='login-btn1' onClick={customercheck}>Sign In</button>
          </div>

        </div>
      </div>
      <Link to="/signup">
      <div className="centered">
      <button className="h-button" data-text="Sign up for new Account">
        <span>Yeah Lets Go!!</span>
      </button>
      </div>
      </Link>
      
    </>
  );
}

export default Login;