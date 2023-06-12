import './Home.css';
import { useStates } from '../../States';
import { useEffect } from 'react';
import { motion } from "framer-motion";
function Home() {
    const { getAllGyms,gym } = useStates();

    useEffect(() => {
        getAllGyms();
        // eslint-disable-next-line
    },[]);
  
    return (
        <>
         <motion.div className="gym-page">
           {gym.map((gym,i) => {
            return(
                <>
                <motion.div layout key={i} className="gym-div">
                    <img className='gym-img' src={gym.gymUrl} alt=""></img>
                    <span className='gym-name'><b>{gym.gymName}</b></span>
                    <span className='gym-rate'>Rs.{gym.gymRate}.00</span>
                    <span className='gym-description'><b>{gym.gymDescription} </b></span>
                </motion.div>
                </>
            )
        })}
        </motion.div>
        </>
    );
};
export default Home;