import Loader from './components/Loader'
import Pages from './pages/Pages'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BleepsProvider } from '@arwes/react';


const bleepsSettings = {
  master: {
    volume: 0.4
  },
  bleeps: {
    intro: {
      sources: [ { src: 'https://arwes.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' } ]
    },
    click: {
      sources: [ { src: 'https://arwes.dev/assets/sounds/click.mp3', type: 'audio/mpeg' } ]
    }
  }
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  

  return (
    <>
    <BrowserRouter>
      <BleepsProvider {...bleepsSettings}>
      
        {loading ? <Loader/> : <Pages/>}
       
      </BleepsProvider>
    </BrowserRouter>
    </>
  )
}

export default App