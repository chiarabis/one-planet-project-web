import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import CarbonDioxide from '../components/topic/CarbonDioxide';
import GlobalTemperature from '../components/topic/GlobalTemperature';
import Oceans from '../components/topic/Oceans';
import Methane from '../components/topic/Methane';
import NitrousOxide from '../components/topic/NitrousOxide';
import IceMelting from '../components/topic/IceMelting';

export default function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route path="/co2" element={<CarbonDioxide/>}></Route>
        <Route path='/global-temperature' element={<GlobalTemperature/>}/>
        <Route path='/oceans' element={<Oceans/>}/>
        <Route path='/methane' element={<Methane/>}/>
        <Route path='/no' element={<NitrousOxide/>}/>
        <Route path='/ice-melting' element={<IceMelting/>}/>
    </Routes>
  )
}
