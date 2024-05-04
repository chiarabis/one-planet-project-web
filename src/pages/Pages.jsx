import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import LocationSearched from '../components/topic/LocationSearched';
import GlobalTemperature from '../components/topic/GlobalTemperature';
import GreenhouseGases from '../components/topic/GreenhouseGases';
import IceMelting from '../components/topic/IceMelting';
import OceanWarming from '../components/topic/OceanWarming';
import ForestLoss from '../components/topic/ForestLoss';
import ActNow from '../components/topic/ActNow';




export default function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/location-searched/:search' element={<LocationSearched/>}/>
        <Route path='/greenhouse-gases' element={<GreenhouseGases/>}/>
        <Route path='/global-temperature' element={<GlobalTemperature/>}/>
        <Route path='/ice-melting' element={<IceMelting/>}/>
        <Route path='/ocean-warming' element={<OceanWarming/>}/>
        <Route path='/forest-loss' element={<ForestLoss/>}/>
        <Route path='/act-now' element={<ActNow/>}/>
    </Routes>
  )
}
