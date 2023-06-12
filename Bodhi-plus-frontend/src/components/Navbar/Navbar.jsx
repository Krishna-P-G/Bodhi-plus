import './Navbar.css';
import { useStates } from "../../States";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const { setSearchvalue,getAllGyms,searchvalue} = useStates();
    
    useEffect(() => {
        getAllGyms();
        // eslint-disable-next-line
    },[searchvalue]);
    
    return (
        <>
            <div className='navbar-page'>

                <div className='navbar-div'>
                    <ul>
                        <li>
                        <span className='brand-name-1'>Iron Fusion</span>
                        </li>
                        <li>
                        <input className='nav-searchbar' type='text' placeholder=' 🔭 Search for your equipment'
                        onChange={(e) => setSearchvalue(e.target.value)}></input>
                        </li>
                        <li>
                            <Link to="/"><div className='filter-div'><button className='filter-btn'>Logout</button></div></Link>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
};
export default Navbar;