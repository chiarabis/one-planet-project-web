//import '../homepage.css'
import { FrameSVGKranox } from '@arwes/react-frames';

export default function MissionCheck() {
  return (
    <>
        <div style={{
            position: 'relative',
            width: 340,
            height: 160,
            zIndex: 1,
            }} className='svg-cyber'>

            <FrameSVGKranox/>

            <div className='py-5 px-8 pl-20 w-fit h-full text-start flex flex-col justify-center encode-sans text-white'>
              <div className='w-[120px]'>
                <p className='bar general-typewriter italic font-semibold'>Mission check:</p>
              </div>
              <p className='fade-1 mt-3'>Learn and stay informed about the vital signs of our planet and actions to take</p>
            </div>

            <svg className='border-l-4 border-neon-cyan absolute top-0 h-[64px] translate-y-3/4 translate-x-[-10px]'></svg>
            <svg className='border-t-2 border-neon-cyan absolute top-1/2 w-full h-0 translate-x-[-102%]'></svg>

            <div className='items-center absolute top-[46%] translate-x-8 w-fit'>
              <div className="circle pulse-target bg-red"></div>
            </div>          
        </div>
    </>
  )
}
