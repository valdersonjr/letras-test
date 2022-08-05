import React from 'react';
import { SearchBar } from '../../components/searchbar';

import './styles.css';

interface ICoordinates {
  lat: number;
  setLat: (e: number) => void;
  setLng: (e: number) => void;
}

export default function Home({ lat, setLat, setLng }: ICoordinates) {
  return (
    <div className='home-container'>
      <span className='home-text'>How is the weather today?</span>
      <SearchBar setLat={setLat} setLng={setLng} />
    </div>
  );
}
