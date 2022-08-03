import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, WheatherInformations } from './pages';

import './styles.css';

function App() {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

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
      </Routes>
    </div>
  );
}

export default App;
