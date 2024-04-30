import '../homepage.css'
import { Link } from 'react-router-dom'
import { useBleeps } from '@arwes/react'

export default function AboutProject() {
    const bleeps = useBleeps();

    return (
    <>
        <div className='lg:w-min lg:relative'>
          <div className='circle-anim relative lg:absolute'>
            <div className='face face1'>
                <div className='cyber-circle'></div>
            </div>
            <Link to='/about-the-project' onClick={() => bleeps.click?.play()}>
                <h3 className='project-link encode-sans text-center text-white uppercase w-fit absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10'>About the project</h3>
            </Link>
            <div className='face face2'>
                <div className='cyber-circle'></div>
            </div>
          </div>
        </div>
    </>
  )
}
