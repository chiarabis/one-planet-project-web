import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import LocationSearched from '../components/topic/LocationSearched';
import GlobalWarming from '../components/topic/GlobalWarming';
import GreenhouseGases from '../components/topic/GreenhouseGases';
import IceMelting from '../components/topic/IceMelting';
import OtherTopics from '../components/topic/OtherTopics';



export default function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/location-searched/:search' element={<LocationSearched/>}/>
        <Route path='/global-warming' element={<GlobalWarming/>}/>
        <Route path='/greenhouse-gases' element={<GreenhouseGases/>}/>
        <Route path='/ice-melting' element={<IceMelting/>}/>
        <Route path='/other-topics' element={<OtherTopics/>}/>
    </Routes>
  )
}
