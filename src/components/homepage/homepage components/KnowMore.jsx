import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { createFrameOctagonClip } from '@arwes/frames';
import { useBleeps } from '@arwes/react'
//import '../homepage.css'

export default function Info() {
    const bleeps = useBleeps();

    return (
    <>
        <div className='flex relative flex-col items-center lg:items-end lg:my-0 mt-16 w-[300px]'>
            <div className='w-max mb-2'>
                <div className='flex flex-row items-center anta-regular text-2xl leading-3 text-neon-cyan cyan-shadow
                flicker-anim thick-bar'>
                <FontAwesomeIcon icon={faAnglesRight} className='mr-2'/>
                <h2 className='mr-[0.1rem]'>Know more</h2>
                </div>
            </div>
        

            <div className='items-end fade-2'> {/**flex-row-reverse  */}
                {/**global warming */}
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
                        <a href='https://science.nasa.gov/climate-change/what-is-climate-change/' 
                        onClick={() => bleeps.intro?.play()}>
                            <h3 className='menu-link'>Global warming</h3>
                        </a>
                        <p className='encode-sans text-sm text-white mt-3'>What is it? What it is caused by and what consequences
                        does it have?</p>
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
                        <a href='https://science.nasa.gov/climate-change/faq/what-is-the-greenhouse-effect/' onClick={() => bleeps.intro?.play()}>
                            <h3 className='menu-link'>Greenhouse effect</h3>
                        </a>
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
        </div>    
    </>
  )
}
