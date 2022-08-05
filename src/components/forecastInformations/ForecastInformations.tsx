import React from 'react';
import { useNavigate } from 'react-router-dom';

import FiveDaysForecast from './FiveDaysForecast';

import './styles.css';

interface IMaxMin {
  max: number;
  min: number;
}
interface ITimestamp {
  day: number;
  week: number;
  month: string;
}

interface IForecastDisplayInformations {
  temperature: IMaxMin;
  weatherDescription: string;
}

interface IDaysForecast {
  city: string;
  toggle: string;
  timestamp: ITimestamp;
  day1: IForecastDisplayInformations;
  day2: IForecastDisplayInformations;
  day3: IForecastDisplayInformations;
  day4: IForecastDisplayInformations;
  day5: IForecastDisplayInformations;
}

//change to array
export default function ForecastInformations({
  city,
  toggle,
  timestamp,
  day1,
  day2,
  day3,
  day4,
  day5,
}: IDaysForecast) {
  let navigate = useNavigate();

  const handleReturn = () => {
    navigate('/informations');
  };

  return (
    <>
      <div>
        <img
          className='arrow-icon'
          src={require('../../assets/left_arrow.png')}
          alt='Icon of an arrow'
          style={{ margin: '50px' }}
          onClick={handleReturn}
        />
      </div>
      <div className='forecast-info-container'>
        <span className='forecast-city'>{city}</span>
        <span className='five-forecast'>5 days forecast</span>

        <FiveDaysForecast
          timestamp={timestamp}
          toggle={toggle}
          day1={day1}
          day2={day2}
          day3={day3}
          day4={day4}
          day5={day5}
        />
      </div>
    </>
  );
}
