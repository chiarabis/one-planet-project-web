import { FrameSVGNefrex } from '@arwes/react-frames';
import { Link } from 'react-router-dom'
import { useBleeps } from '@arwes/react'
//import '../homepage.css'

export default function ThirdColumn() {
    const bleeps = useBleeps();

    return (
    <>
        <div className='flex flex-col justify-start fade-3 w-[250px]'>

            <div className='flex flex-col my-5'>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    zIndex: 1,
                    }} className='svg-cyber'>
                    <FrameSVGNefrex/>

                    <div className='py-5 px-8'>
                    <div className='anta-regular w-fit'>
                        <h3 className='text-white infinite-typewriter bar uppercase'>Global temperature</h3>
                        <span className='pulse-value'>1.7</span>
                    </div>
                    <Link to='/global-temperature' onClick={() => bleeps.click?.play()} className='float-right data-button anta-regular'>More</Link>
                    </div>
                </div>
            </div>

            <div className='flex flex-col my-5'>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    zIndex: 1,
                    }} className='svg-cyber'>
                    <FrameSVGNefrex/>

                    <div className='py-5 px-8'>
                    <div className='anta-regular w-fit'>
                        <h3 className='text-white infinite-typewriter-2 bar uppercase'>Sea ice extent</h3>
                        <span className='pulse-value'>1.7</span>
                    </div>
                    <Link to='/ice-melting' onClick={() => bleeps.click?.play()} className='float-right data-button anta-regular'>More</Link>
                    </div>
                </div>
            </div>

            <div className='flex flex-col my-5'>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    zIndex: 1,
                    }} className='svg-cyber'>
                    <FrameSVGNefrex/>

                    <div className='py-5 px-8'>
                        <div className='anta-regular w-fit'>
                            <h3 className='text-white infinite-typewriter-1 bar uppercase'>Ocean warming</h3>
                            <span className='pulse-value'>1.7</span>
                        </div>
                        <Link to='/ocean-warming' onClick={() => bleeps.click?.play()} className='float-right data-button anta-regular'>More</Link>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}
