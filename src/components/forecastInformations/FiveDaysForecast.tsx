import React from 'react';

// import { findIcon } from './calculations';
import { kelvinConverterToType } from '../../calculations';
import { getDayOfTheWeekName } from '../../pages/forecast/calculations';

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

interface IForecastDataDay {
  toggle: string;
  timestamp: ITimestamp;
  day1: IForecastDisplayInformations;
  day2: IForecastDisplayInformations;
  day3: IForecastDisplayInformations;
  day4: IForecastDisplayInformations;
  day5: IForecastDisplayInformations;
}

export default function FiveDaysForecast({
  toggle,
  timestamp,
  day1,
  day2,
  day3,
  day4,
  day5,
}: IForecastDataDay) {
  const data = [day1, day2, day3, day4, day5];

  return (
    <>
      {data.map((data, key) => {
        let maxTemperature = data.temperature.max;
        let minTemperature = data.temperature.min;

        if (toggle === './assets/toggle_off.png') {
          maxTemperature = kelvinConverterToType(maxTemperature, 'fahrenheit');
          minTemperature = kelvinConverterToType(minTemperature, 'fahrenheit');
        } else if (toggle === './assets/toggle_on.png') {
          maxTemperature = kelvinConverterToType(maxTemperature, 'celsius');
          minTemperature = kelvinConverterToType(minTemperature, 'celsius');
        }

        let week;

        if (timestamp.week > 8) {
          week = getDayOfTheWeekName(timestamp.week + key - 7);
        } else {
          week = getDayOfTheWeekName(timestamp.week + key);
        }

        // const iconPath = findIcon(data.weatherDescription);

        return (
          <div className='five-days-forecast-container' key={key}>
            <div className='forecast-date'>
              <span className='forecast-text'>{week},</span>
              <span className='forecast-text'>{timestamp.day + key}</span>
              <span className='forecast-text'>{timestamp.month}</span>
            </div>
            <img
              className='forecast-icons'
              // src={iconPath} //idk why this doesn't work
              src={require('../../assets/heavy_rain.png')}
              style={{ width: '40px' }}
              alt='icon'
            />
            <span className='temperature-five-forecast'>
              {Math.round(minTemperature)}
            </span>
            <div className='gradient-line' />
            <span className='temperature-five-forecast'>
              {Math.round(maxTemperature)}
            </span>
            <span className='forecast-description'>
              {data.weatherDescription !== undefined
                ? data.weatherDescription
                : 'N/A'}
            </span>
          </div>
        );
      })}
    </>
  );
}
