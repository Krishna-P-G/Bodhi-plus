import './loginAdmin.css';
import { useStates } from '../../States';
import { Link } from 'react-router-dom';

function LoginAdmin() {

  // UseStates
  const { setEmail1, setPassword1, mailerror1, pwerror1 , logincheck1} = useStates();
 
  return (
    <>
      <div className='login-page-Admin'>
      <span className='App-name-3'><b>Bodhi Plus</b></span>
        <div className='login-box2'>
          
          <div className='login-div2'>
            <span className='login-text2'><b>   Sign in as Admin   </b></span>
          </div>

          <div className='mail-div2'>
            <span className='mail-text2'>Email</span>
            <input className='mail-in2' type='mail' placeholder='Email'
              onChange={(e) => setEmail1(e.target.value)}></input>
              {mailerror1 && <span className='mailerror-text-login2'><b>{mailerror1}</b></span>}
          </div>

          <div className='pw-div2'>
            <span className='pw-text2'>Password</span>
            <input className='pw-in2' type='password' placeholder='Password'
              onChange={(e) => setPassword1(e.target.value)}></input>
              {pwerror1 && <span className='pwerror-text-login2'><b>{pwerror1}</b></span>}
          </div>

          <div className='loginbtn-div2'>
            <button className='login-btn2' onClick={logincheck1}>Sign In</button>
          </div>

          <div className='signuplink-div2'>
            <span className='signuplink-txt12'>Not a member ?</span>
            <Link to='/signupquery'>
              <span className='signuplink-txt22'><u>Sign up now</u></span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default LoginAdmin;