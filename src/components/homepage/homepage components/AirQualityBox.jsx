//import '../homepage.css'
import Searchbar from '../../header/Searchbar';
import { FrameSVGCorners } from '@arwes/react-frames';


export default function AirQualityBox() {

    return (
    <>
      <div className='flex flex-col'>
        <div style={{
            position: 'relative',
            width: 300,
            height: 'fit-content',
            zIndex: 1,
            marginTop: '24px',
            }} className='svg-cyber'>
            <FrameSVGCorners
            cornerLength={28}
            strokeWidth={1.2}
            />
        
            <div className='text-center m-10'> {/**py-5 px-8 */}
              <h3 className='anta-regular glowing-text text-neon-pink pink-shadow text-xl'>Air quality index</h3>
              <Searchbar/>
            </div>
        </div>
      </div>
    </>
    )
}
