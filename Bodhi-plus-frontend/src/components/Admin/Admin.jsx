import '../Home/Home.css';
import { useStates } from '../../States';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { MdAddBox,MdEdit } from "react-icons/md"
import { FaRegEdit} from "react-icons/fa"

import AddGym from './AddGym';
import EditGym from './EditGym';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Tooltip } from '@mui/material';

function AdminHome() {
    const { getAllGyms,gym,deletefromDB,addgym,setaddgym,editgym,seteditgym,seteditGym } = useStates();

    useEffect(() => {
        getAllGyms();
        // eslint-disable-next-line
    },[]);

    const geteditdata = (gym) => {
        fetch(`http://localhost:1403/gym/getbyid/${gym.gymId}`)
        .then((res) => res.json())
        .then((result) => {
            seteditGym(result);
            console.log(result);
        });
    };
  
    return (
        <>
         <motion.div className="gym-page">
            
            <button  className='addpage-linkbtn' onClick={() => setaddgym(true)}>
              <span className='addpage-link'>Add product</span>
             {addgym && <AddGym show={setaddgym}/>}
            </button>
             {editgym && <EditGym show={seteditgym}/>}
             
           {gym.map((gym,i) => {
            return(
                <>
                <motion.div layout key={i} className="admin-div">

                <Tooltip title="Edit"  placement="right" arrow>
                    <button className='edit-btn' 
                    onClick={()=> {
                        seteditgym(true)
                        geteditdata(gym)
                    }}>
                        <FaRegEdit/></button>
                </Tooltip>
                
                <Tooltip title="Delete"  placement="bottom" arrow>
                    <button className='delete-btn' onClick={() =>{deletefromDB(gym.gymId)}}
                    ><RiDeleteBinLine/></button>
                </Tooltip>

                    <img className='gym-img' src={gym.gymUrl} alt=""></img>
                    <span className='gym-name'><b>{gym.gymName}</b></span>
                    <span className='gym-rate'>Rs.{gym.gymRate}.00</span>
                    <span className='gym-description'><b>{gym.gymDescription}</b></span>
                </motion.div>
                </>
            )
        })}
        </motion.div>
        </>
    );
};
export default AdminHome;