import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Forecast, Home, WheatherInformations } from './pages';

import './styles.css';

function App() {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (lat !== 0) {
      navigate('/informations');
    }
  }, [lat]);

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Home lat={lat} setLat={setLat} setLng={setLng} />}
        />
        <Route
          path='/informations'
          element={<WheatherInformations lat={lat} lng={lng} />}
        />
        <Route path='/forecast' element={<Forecast lat={lat} lng={lng} />} />
      </Routes>
    </div>
  );
}

export default App;
