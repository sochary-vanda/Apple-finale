import './App.css'
import Navbar from './components/Navbar'
import { CiSearch } from "react-icons/ci";
import CardOne from './components/CardOne';
import Button from './components/Button';
import Cardtwo from './components/Cardtwo';
import ButtonWhite from './components/ButtonWhite';
import CardThree from './components/CardThree';

function App() {
  

  return (
    <>
         <Navbar/>
         <div >
          <CardOne/>
         </div>
         <Cardtwo img="/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg" title="iPhone" des="Say hello to the latest generation of iPhone." b1="Learn More" b2="Shop iPhone"/>
         <Cardtwo img="/hero_airpodspro_3__dn7gz4l22ree_mediumtall_2x.jpg" title="AirPods Pro 3" des="The world's best in-ear Active Noise Cancellation." b1="Learn More" b2="Buy" />
         
        <div className='flex pl-5 pr-5 gap-x-5 '>
          <CardThree img="/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg" title="MacBook Pro" des="Supercharged by M2 Pro and M2 Max." b1="Learn More" b2="Shop MacBook Pro" />
                  <CardThree img="/hero_airpodspro_3__dn7gz4l22ree_mediumtall_2x.jpg" title="MacBook Pro" des="Supercharged by M2 Pro and M2 Max." b1="Learn More" b2="Shop MacBook Pro" />

        
        </div>
           
    
    </>
  )
}

export default App
