import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import { useBleeps } from '@arwes/react';
import '../homepage.css'

export default function AirQualityBox() {
    const bleeps = useBleeps();

    return (
    <>
      <Box
        height='auto'
        width='max-content'
        position='relative'
        my={8}
        boxShadow='0 0 10px 3px #fafafa, inset 0 0 10px 3px #fafafa'
        sx={{ border: '2px solid #fafafa', borderRadius: '2px' }} className='fade-2'>

        <div className='text-center m-10'>
          <h3 className='anta-regular glowing-text text-neon-pink pink-shadow text-xl'>Air quality index</h3>
          
          <div className='mt-3 text-start encode-sans relative'>
            <label className='text-sm text-white'>Monitoring pollutant levels:</label>
            <div className='my-2 bg-zinc-50/50 px-2 py-1 rounded-sm text-start'>
              <input type='text' placeholder='Search location...' className='caret-neon-pink bg-transparent placeholder-zinc-50 text-sm text-dark'/>
              <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => bleeps.click?.play()} className='text-dark cursor-pointer hover:text-neon-pink'/>
            </div>
            
          </div>
        </div>

      </Box>
    </>
    )
}
