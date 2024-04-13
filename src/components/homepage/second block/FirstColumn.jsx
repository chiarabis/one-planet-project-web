import { FrameSVGLines } from '@arwes/react-frames';
import { createFrameOctagonClip } from '@arwes/frames';
import { Link } from 'react-router-dom'
import { useBleeps } from '@arwes/react'
import '../homepage.css'

export default function FirstColumn() {
    const bleeps = useBleeps();

    return (
    <>
        <div className='flex flex-col justify-start fade-3'>

            <div className='flex flex-col my-5'>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    zIndex: 1,
                    }} className='svg-cyber'>
                    <FrameSVGLines/>

                    <div className='py-5 px-8'>
                    <div className='anta-regular w-fit'>
                        <h3 className='text-white infinite-typewriter bar uppercase'>Global temperature</h3>
                        <span className='pulse-value'>1.7</span>
                    </div>
                    <Link onClick={() => bleeps.click?.play()} className='float-right data-button anta-regular'>More</Link>
                    </div>
                </div>
            </div>
    
      
            <div className='gradient-lines my-5'>
                <h3 className='anta-regular mb-3 text-center'>Greenhouse gases</h3>
                <div className='flex flex-col'>
                    {/*1 box*/}
                    <div style={{
                        width: '100%',
                        height: 'auto',
                        clipPath: createFrameOctagonClip({
                            leftTop: false,
                            rightTop: true,
                            rightBottom: false,
                            leftBottom: true
                        }),
                        background: '#00ffe230',
                    }}>

                    <div className='py-5 px-8'>
                        <div className='anta-regular w-fit'>
                        <h3 className='text-white infinite-typewriter-1 bar uppercase'>co<sub>2</sub> level</h3>
                        <span className='pulse-value'>1.7</span>
                        </div>
                        <Link onClick={() => bleeps.click?.play()} className='float-right data-button anta-regular'>More</Link>
                    </div>
                    </div>

                    {/*2 box*/}
                    <div style={{
                        width: '100%',
                        height: 'auto',
                        clipPath: createFrameOctagonClip({
                            leftTop: false,
                            rightTop: true,
                            rightBottom: false,
                            leftBottom: true
                        }),
                        background: '#00ffe230',
                        margin: '1rem 0'
                    }}>

                    <div className='py-5 px-8'>
                        <div className='anta-regular w-fit'>
                        <h3 className='text-white infinite-typewriter-3 bar uppercase'>ch<sub>4</sub> level</h3>
                        <span className='pulse-value'>1.7</span>
                        </div>
                        <Link onClick={() => bleeps.click?.play()} className='float-right data-button anta-regular'>More</Link>
                    </div>
                    </div>

                    {/*3 box*/}
                    <div style={{
                        width: '100%',
                        height: 'auto',
                        clipPath: createFrameOctagonClip({
                            leftTop: false,
                            rightTop: true,
                            rightBottom: false,
                            leftBottom: true
                        }),
                        background: '#00ffe230'
                    }}>

                    <div className='py-5 px-8'>
                        <div className='anta-regular w-fit'>
                        <h3 className='text-white infinite-typewriter-2 bar uppercase'>no level</h3>
                        <span className='pulse-value'>1.7</span>
                        </div>
                        <Link onClick={() => bleeps.click?.play()} className='float-right data-button anta-regular'>More</Link>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
