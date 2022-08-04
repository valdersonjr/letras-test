import React from 'react';
import { useNavigate } from 'react-router';

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
  let navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  const handleRedirect = () => {
    navigate('/forecast');
  };

  return (
    <>
      <img
        className='arrow-icon'
        src={require('../../assets/left_arrow.png')}
        alt='Icon of an arrow'
        style={{ margin: '40px' }}
        onClick={handleReturn}
      />
      <div className='wheather-information-display-container'>
        <span className='city'>{city}</span>
        <span className='weather-description'>{weatherDescription}</span>
        <div className='icon-temperature'>
          <span className='temperature'>{temperature}</span>
          <img
            className='cloud-icon'
            src={require('../../assets/cloud_icon.png')}
            alt='Icon of a cloud'
          />
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
        <span className='prediction' onClick={handleRedirect}>
          previsao proximos 5 dias
        </span>
      </div>
    </>
  );
}
