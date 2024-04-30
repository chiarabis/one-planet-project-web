import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useBleeps } from '@arwes/react';
import Box from '@mui/material/Box';

export default function ClimateChange() {
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
        <div className='flex flex-col fade-3 w-full lg:w-min items-center justify-center order-1 lg:order-none'>
          <div className='h-full flex flex-col justify-between my-10 lg:m-10 w-fit lg:w-max items-center box-glow'>
            
              <div className='flex flex-col items-center encode-sans py-3 px-4 lg:px-8'>
                <FontAwesomeIcon icon={faTriangleExclamation} beatFade className='h-10 m-3 text-red'/>
                <h3 className='highlight-title mt-5 text-2xl lg:text-4xl'>climate change</h3>
              </div>
              <div className='flex flex-row justify-between w-full encode-sans px-8 py-3 text-xs'>
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
                  <Link to='/act-now' onClick={() => bleeps.intro?.play()}>act now</Link>
                </div>              
            </div>
          </div>
        </div>
    </>
  )
}
