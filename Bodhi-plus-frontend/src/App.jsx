import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { States } from './States';
import Login from './components/Login/login';
import Signupquery from './components/signup/signupquery';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Navbar from '././components/Navbar/Navbar';
import LoginCustomer from './components/Login/loginCustomer';
import LoginAdmin from './components/Login/loginAdmin';
import SignupCustomer from './components/signup/signupCustomer';
import SignupAdmin from './components/signup/signupAdmin';

function App() {
  return (
    <div className='router'>
      <BrowserRouter>
        <States>
          <Routes>

            <Route
              path='/home'
              element=
              {
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />

            <Route
              path='/admin/home'
              element=
              {
                <>
                  <Navbar />
                  <Admin />
                </>
              }
            />
            
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/logincustomer"
              element={<LoginCustomer />}
            />
            <Route
              path="/loginadmin"
              element={<LoginAdmin />}
            />

            <Route
              path="/signupcustomer"
              element={<SignupCustomer/>}
            />
            <Route
              path="/signupquery"
              element={<Signupquery />}
            />
            <Route
              path="/signupadmin"
              element={<SignupAdmin/>}
            />


          </Routes>
        </States>
      </BrowserRouter>
    </div>
  );
}

export default App;