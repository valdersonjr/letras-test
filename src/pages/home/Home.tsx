import React from 'react';
import { SearchBar } from '../../components';

import './styles.css';

export default function Home() {
  return (
    <div className='home-container'>
      <span className='home-text'>Como está o tempo hoje?</span>
      <SearchBar />
    </div>
  );
}
