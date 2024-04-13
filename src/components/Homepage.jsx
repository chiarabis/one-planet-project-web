import FirstBlock from './homepage/first block/FirstBlock';
import SecondBlock from './homepage/second block/SecondBlock';
import backgroundImage from '/2.jpg';
import {motion} from 'framer-motion'


export default function Homepage() {

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>

    
      <div className='bg-cover h-screen w-screen overflow-y-scroll fixed flex flex-col items-center' style={{backgroundImage: `url(${backgroundImage})`}}>
        
        <div className='text-center my-20'>
          <h1 className='anta-regular text-7xl glitch' data-text='One Planet Project'>One Planet Project</h1>
        </div>
        <FirstBlock/>
        <SecondBlock/>
        
      </div>
    </motion.div>
    </>
  )
}