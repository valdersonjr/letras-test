import React from 'react';

import './styles.css';

interface IMaxMin {
  max: number;
  min: number;
}

interface ITimestamp {
  day: number;
  week: string;
  month: string;
}

interface IForecastDisplayInformations {
  temperature: IMaxMin;
  weatherDescription: string;
}

interface IForecastDataDay {
  timestamp: ITimestamp;
  day1: IForecastDisplayInformations;
  day2: IForecastDisplayInformations;
  day3: IForecastDisplayInformations;
  day4: IForecastDisplayInformations;
  day5: IForecastDisplayInformations;
}

export default function FiveDaysForecast({
  timestamp,
  day1,
  day2,
  day3,
  day4,
  day5,
}: IForecastDataDay) {
  const data = [day1, day2, day3, day4, day5]; //map disso

  return (
    <>
      {data.map((data, key) => {
        return (
          <div className='five-days-forecast-container' key={key}>
            <div className='forecast-date'>
              <span className='forecast-text'>{timestamp.week},</span>
              <span className='forecast-text'>{timestamp.day + key}</span>
              <span className='forecast-text'>{timestamp.month}</span>
            </div>
            <img
              className='forecast-icons'
              src={require('../../assets/cloud_icon.png')}
              alt='icon'
            />
            <span className='temperature-five-forecast'>
              {Math.round(data.temperature.min)}
            </span>
            <div className='gradient-line' />
            <span className='temperature-five-forecast'>
              {Math.round(data.temperature.max)}
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
