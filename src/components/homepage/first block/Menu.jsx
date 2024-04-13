import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { createFrameOctagonClip } from '@arwes/frames';
import { FrameSVGCorners } from '@arwes/react-frames';
import { useBleeps } from '@arwes/react'
import { Link } from 'react-router-dom'
import '../homepage.css'

export default function Menu() {
    const bleeps = useBleeps();

    return (
    <>
        <div className='flex relative flex-col items-end'>
            <div className='w-max'>
                <div className='flex flex-row items-center anta-regular text-2xl leading-3 text-neon-cyan cyan-shadow
                menu-anim thick-bar'>
                <FontAwesomeIcon icon={faAnglesRight} className='mr-2'/>
                <h2 className='mr-[0.1rem]'>Know more</h2>
                </div>
            </div>
        

            <div className='flex flex-row-reverse items-end fade-2'>

                {/**global warming*/}
                <div className='flex flex-col'>
                    <div style={{
                        position: 'relative',
                        width: 300,
                        height: 'fit-content',
                        zIndex: 1,

                        margin: '.75rem 0',
                        }} className='svg-cyber'>
                        <FrameSVGCorners
                        cornerLength={28}
                        strokeWidth={1.2}
                        />
                    
                        <div className='py-5 px-8'>
                            <Link to='/global-warming' onClick={() => bleeps.intro?.play()}>
                                <h3 className='menu-link'>Global warming</h3>
                            </Link>
                            <p className='encode-sans text-sm text-white mt-3'>What is it? What it is caused by and what consequences does it have?</p>
                        </div>
                    </div>
            
                {/**greenhouse effect e altro blocco info */}
                    <div style={{
                        width: 300,
                        height: 'fit-content',
                        clipPath: createFrameOctagonClip({
                        leftTop: true,
                        rightTop: false,
                        rightBottom: false,
                        leftBottom: true
                        }),
                        background: '#00ffe230',
                        borderRight: '1.6px solid #00ffe2',
                        marginBottom: '.75rem'
                        }}>

                        <div className='py-5 px-8 text-end'>
                            <Link to='/greenhouse-effect' onClick={() => bleeps.intro?.play()}>
                                <h3 className='menu-link'>Greenhouse effect</h3>
                            </Link>
                        </div>
                    </div>

                    <div style={{
                        width: 300,
                        height: 'fit-content',
                        clipPath: createFrameOctagonClip({
                        leftTop: true,
                        rightTop: false,
                        rightBottom: false,
                        leftBottom: true
                        }),
                        background: '#00ffe230',
                        borderRight: '1.6px solid #00ffe2',
                        }}>

                        <div className='py-5 px-8 flex flex-col items-end'>
                            <a href='https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal_it' onClick={() => bleeps.intro?.play()}>
                                <h3 className='menu-link'>Green Deal</h3>
                            </a>
                            <a href='https://www.un.org/en/climatechange/net-zero-coalition' onClick={() => bleeps.intro?.play()}>
                                <h3 className='menu-link my-3'>Net Zero - ONU</h3>
                            </a>
                            <a href='https://www.consilium.europa.eu/it/policies/climate-change/paris-agreement/' onClick={() => bleeps.intro?.play()}>
                                <h3 className='menu-link'>Paris Agreement</h3>
                            </a>
                        </div>
                    </div>

                </div>
              
                <div className='circle-anim'>
                    <div className='face face1'>
                        <div className='cyber-circle'></div>
                    </div>
                    <Link to='/about-the-project' onClick={() => bleeps.click?.play()}>
                        <h3 className='project-link encode-sans text-center text-white uppercase w-fit absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10'>About the project</h3>
                    </Link>
                    <div className='face face2'>
                        <div className='cyber-circle'>
                    </div>
                    </div>
                </div>

            </div>
        </div>    
    </>
  )
}
