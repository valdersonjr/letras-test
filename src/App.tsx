import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, WheatherInformations } from './pages';

import './styles.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/informations' element={<WheatherInformations />} />
      </Routes>
    </div>
  );
}

export default App;
