import '../homepage.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
//i bleeps si attivano solo con click o facendo un azione sulla pagina
import { useBleeps } from '@arwes/react'
import FirstColumn from './FirstColumn';
import ThirdColumn from './ThirdColumn';

export default function SecondBlock() {
    const bleeps = useBleeps();
  
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentTime.toLocaleDateString('en-US', options);
    const formattedTime = currentTime.toLocaleTimeString();


  return (
    <>
        <div className='flex flex-row justify-around w-full my-10'>
        
        {/*prima colonna */}
        <FirstColumn/>
        

        {/**colonna centrale */}
        <div className='flex flex-col fade-3 w-min items-center justify-center'>
          <div className='h-[300px] bg-center bg-contain bg-no-repeat flex flex-col justify-around m-10 w-max items-center' style={{ backgroundImage: "url('/consolle.png')" }}>
            
              <div className='flex flex-col items-center encode-sans py-3 px-8'>
                <FontAwesomeIcon icon={faTriangleExclamation} beatFade className='h-10 m-3 text-red'/>
                <h3 className='console-title'>climate change</h3>
              </div>
              <div className='flex flex-row justify-between w-full encode-sans py-3 px-8 text-xs'>
                <span className='glitch-datetime' data-content={formattedTime}>{formattedTime}</span>
                <span className='glitch-datetime' data-content={formattedDate}>{formattedDate}</span>
              </div>
          </div>

          <div className='flex flex-col items-center m-10'>
            <h3 className='text-xl text-center encode-sans white-shadow glowing-text mb-5'>We are on a collision course.<br/>
            Press the button to find out what you can do to reverse the trend.</h3>

            <div className='relative'>
              <img src='/radar.png' className='radar'/>
                <div className='uppercase anta-regular button-act text-xl act-link text-red'>
                  <Link onClick={() => bleeps.intro?.play()}>act now</Link>
                </div>              
            </div>
          </div>
        </div>


        {/*terza colonna */}
        <ThirdColumn/>
        
      </div>
    </>
  )
}
