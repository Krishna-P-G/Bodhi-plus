import './AddGym.css'
import { TextField } from '@mui/material'
import { useStates } from '../../States';
import { GiCrossedBones } from 'react-icons/gi'

const AddGym = ({ show }) => {

  const { setGymname, setGymrate, setGymurl, SendtogymDB, setGymdescription } = useStates();
  return (
    <>
      <div className='add-page'>
        <div className='add-box'>

          <div className='add-div'>
            <span className='add-text'><b>Add New Equipment</b></span>
          </div>

          <form onSubmit={() => show(false)}>
            <div className='canceladdgym-div'>
              <button className='canceladdgym-btn'><b><GiCrossedBones/></b></button>
            </div>
          </form>

          <form onSubmit={SendtogymDB}>

            <div className='gymname-div'>
              <TextField className='gymname-in' label="Equipment Name" variant="standard" required
                onChange={(e) => setGymname(e.target.value)} />
            </div>

            <div className='gymrate-div'>
              <TextField className='gymrate-in' type='number' label="Equipment Price" variant="standard" required
                onChange={(e) => setGymrate(e.target.value)} />
            </div>

            <div className='gymurl-div'>
              <TextField className='gymurl-in' label="Equipment URL" variant="standard" required
                onChange={(e) => setGymurl(e.target.value)} />
            </div>

            <div className='gymshop-div'>
              <TextField className='gymshop-in' label="Equipment Description" variant="standard" required
                onChange={(e) => setGymdescription(e.target.value)} />
            </div>

            <div className='addgym-div'>
              <button className='addgym-btn' onClick={() => show(false)}>Add Equipment</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};
export default AddGym;