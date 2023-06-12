import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { States } from './States';
import Login from './components/Login/login';
import Home from './components/Home/Home';
import AdminHome from './components/Admin/Admin';
import Navbar from '././components/Navbar/Navbar';
import Signup from './components/signup/signup';
import Amazon from './components/Amazon/amazon';

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
              path='/amazon'
              element=
              {
                <>
                   <Amazon/>
                </>
              }
            />

            <Route
              path='/admin/home'
              element=
              {
                <>
                  <Navbar />
                  <AdminHome />
                </>
              }
            />
            
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup/>}
            />


          </Routes>
        </States>
      </BrowserRouter>
    </div>
  );
}

export default App;