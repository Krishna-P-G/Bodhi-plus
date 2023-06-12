import './EditGym.css'
import { TextField } from '@mui/material'
import { useStates } from '../../States';
import { ImCross } from 'react-icons/im'
import axios from '../../axios';
import { useEffect, useState } from 'react';

const EditGym = ({ show }) => {
    const { getAllGyms,editgyms } = useStates();

    const [gymid, setGymid] = useState("");
    const [gymname, setGymname] = useState("");
    const [gymrate, setGymrate] = useState("");
    const [gymurl, setGymurl] = useState("");
    const [gymdescription, setGymdescription] = useState("");

    useEffect(() => {
      setGymid(editgyms?.gymId)
      setGymname(editgyms?.gymName)
      setGymrate(editgyms?.gymRate)
      setGymurl(editgyms?.gymUrl)
      setGymdescription(editgyms?.gymDescription)
    }, [editgyms]);

    const editfromDB = () => {
      const gymeditDetails = {
        gymName:gymname,
        gymRate:gymrate,
        gymUrl:gymurl,
        gymDescription:gymdescription
      }
      axios.put(`http://localhost:1403/gym/edit/${gymid}`,gymeditDetails)
      .then((response)=>{
        console.log(response);  
        getAllGyms();
      });
  };

  
  return (
    <>
     <div className='edit-page'>
          <div className='edit-box'>

            <div className='edit-div'>
              <span className='edit-text'><b>Edit Gym Equipment</b></span>
            </div>

            <form onSubmit={()=> show(false)}>
            <div className='canceleditgym-div'>
              <button  className='canceleditgym-btn'><b><ImCross/></b></button>
            </div>
            </form>

            <form onSubmit={()=> show(false)}>
            <div className='editgymname-div'>
            <TextField className='editgymname-in' label="Equipment Name" variant="standard" value={gymname}
              onChange={(e) => setGymname(e.target.value)}/>
            </div>

            <div className='editgymrate-div'>
            <TextField className='editgymrate-in' label="Equipment Rate" type='number' variant="standard" value={gymrate}
              onChange={(e) => setGymrate(e.target.value)}/>
            </div>

            <div className='editgymurl-div'>
            <TextField className='editgymurl-in'  label="Equipment URL" variant="standard" value={gymurl}
              onChange={(e) => setGymurl(e.target.value)}/>
            </div>

            <div className='editgymshop-div'>
            <TextField className='editgymshop-in'  label="Equipment Description" variant="standard" value={gymdescription}
              onChange={(e) => setGymdescription(e.target.value)}/>
            </div>

            <div className='editgym-div'>
              <button className='editgym-btn' onClick={editfromDB}>Update Gym Equipment</button>
            </div>
            </form>
           </div> 
        </div>
    </>
  );
};
export default EditGym; 