import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Forecast, Home, WheatherInformations } from './pages';

import './styles.css';

interface ICoordinates {
  lat: number;
  lng: number;
}

function App() {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [toggle, setToggle] = useState<string>('./assets/toggle_off.png');
  let navigate = useNavigate();

  const coordinates: ICoordinates = { lat: lat, lng: lng };

  const handleToggleChange = () => {
    if (toggle === './assets/toggle_off.png') {
      setToggle('./assets/toggle_on.png');
    }
    if (toggle === './assets/toggle_on.png') {
      setToggle('./assets/toggle_off.png');
    }
  };

  useEffect(() => {
    if (lat !== 0) {
      navigate('/informations');
    }
  }, [lat]);

  return (
    <div>
      <img
        className='toggle-icon'
        src={require(`${toggle}`)}
        alt='Icon of a toggle button off'
        onClick={handleToggleChange}
      />
      <Routes>
        <Route
          path='/'
          element={<Home lat={lat} setLat={setLat} setLng={setLng} />}
        />
        <Route
          path='/informations'
          element={
            <WheatherInformations coordinates={coordinates} toggle={toggle} />
          }
        />
        <Route
          path='/forecast'
          element={<Forecast coordinates={coordinates} toggle={toggle} />}
        />
      </Routes>
    </div>
  );
}

export default App;
