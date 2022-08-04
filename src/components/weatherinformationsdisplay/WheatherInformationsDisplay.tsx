import React from 'react';
import { useNavigate } from 'react-router';
import { kelvinConverterToType } from '../../calculations';

import './styles.css';

interface ICityDataNToggle {
  city: string;
  weatherDescription: string;
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
  toggle: string;
}

export default function WheatherInformationsDisplay({
  city,
  toggle,
  weatherDescription,
  temperature,
  maxTemperature,
  minTemperature,
}: ICityDataNToggle) {
  let navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  const handleRedirect = () => {
    navigate('/forecast');
  };

  if (toggle === './assets/toggle_off.png') {
    temperature = kelvinConverterToType(temperature, 'fahrenheit');
    maxTemperature = kelvinConverterToType(maxTemperature, 'fahrenheit');
    minTemperature = kelvinConverterToType(minTemperature, 'fahrenheit');
  } else if (toggle === './assets/toggle_on.png') {
    temperature = kelvinConverterToType(temperature, 'celsius');
    maxTemperature = kelvinConverterToType(maxTemperature, 'celsius');
    minTemperature = kelvinConverterToType(minTemperature, 'celsius');
  }

  return (
    <>
      <img
        className='arrow-icon'
        src={require('../../assets/left_arrow.png')}
        alt='Icon of an arrow'
        style={{ margin: '50px' }}
        onClick={handleReturn}
      />
      <div className='wheather-information-display-container'>
        <span className='city'>{city}</span>
        <span className='weather-description'>{weatherDescription}</span>
        <div className='icon-temperature'>
          <span className='temperature'>{Math.round(temperature)} </span>
          <img
            className='cloud-icon'
            src={require('../../assets/cloud_icon.png')}
            alt='Icon of a cloud'
          />
        </div>
        <div className='max-min-temperature'>
          <span className='max-temperature'>
            <span className='bold'>MAX: </span>
            {Math.round(maxTemperature)}
          </span>
          <span>
            <span className='bold'>MIN: </span>
            {Math.round(minTemperature)}
          </span>
        </div>
        <span className='prediction' onClick={handleRedirect}>
          See forecast for the next 5 days
        </span>
      </div>
    </>
  );
}
