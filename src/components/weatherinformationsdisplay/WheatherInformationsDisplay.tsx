import React from 'react';

import './styles.css';

interface ICityData {
  city: string;
  weatherDescription: string;
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
}

export default function WheatherInformationsDisplay({
  city,
  weatherDescription,
  temperature,
  maxTemperature,
  minTemperature,
}: ICityData) {
  return (
    <div className='wheather-information-display-container'>
      <span className='city'>{city}</span>
      <span className='weather-description'>{weatherDescription}</span>
      <div className='icon-temperature'>
        <span className='temperature'>{temperature}</span>
        <img className='cloud-icon'></img>
      </div>
      <div className='max-min-temperature'>
        <span className='max-temperature'>
          <span className='bold'>MAX: </span>
          {maxTemperature}
        </span>
        <span>
          <span className='bold'>MIN: </span>
          {minTemperature}
        </span>
      </div>
      <span className='prediction'>previsao proximos 5 dias</span>
    </div>
  );
}
