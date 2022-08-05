import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { ForecastInformations } from '../../components';

import openWheatherApiKey from '../../APIKeys/openWheatherAPIKey';

import { getDayOfTheWeekName, getMonthName } from './calculations';
import { findMaxMin } from '../../components/forecastInformations/calculations';

interface ICoordinates {
  lat: number;
  lng: number;
}

interface ICoordinatesNToggle {
  coordinates: ICoordinates;
  toggle: string;
}
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
  dateInformations: ITimestamp;
  weatherDescription: string;
}

export default function Forecast({ coordinates, toggle }: ICoordinatesNToggle) {
  const [forecast, setForecast] = useState<any>(null);

  const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${openWheatherApiKey}`,
  });

  useEffect(() => {
    api
      .get('')
      .then((response) => {
        setForecast(response.data);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  //fix api call time to reduce this repetition
  const day1temp: IMaxMin = findMaxMin(
    forecast?.list[0]?.main?.temp,
    forecast?.list[1]?.main?.temp,
    forecast?.list[2]?.main?.temp,
    forecast?.list[3]?.main?.temp,
    forecast?.list[4]?.main?.temp,
    forecast?.list[5]?.main?.temp,
    forecast?.list[6]?.main?.temp,
    forecast?.list[7]?.main?.temp
  );

  const day2temp: IMaxMin = findMaxMin(
    forecast?.list[8]?.main?.temp,
    forecast?.list[9]?.main?.temp,
    forecast?.list[10]?.main?.temp,
    forecast?.list[11]?.main?.temp,
    forecast?.list[12]?.main?.temp,
    forecast?.list[13]?.main?.temp,
    forecast?.list[14]?.main?.temp,
    forecast?.list[15]?.main?.temp
  );
  const day3temp: IMaxMin = findMaxMin(
    forecast?.list[16]?.main?.temp,
    forecast?.list[17]?.main?.temp,
    forecast?.list[18]?.main?.temp,
    forecast?.list[19]?.main?.temp,
    forecast?.list[20]?.main?.temp,
    forecast?.list[21]?.main?.temp,
    forecast?.list[22]?.main?.temp,
    forecast?.list[23]?.main?.temp
  );
  const day4temp: IMaxMin = findMaxMin(
    forecast?.list[24]?.main?.temp,
    forecast?.list[25]?.main?.temp,
    forecast?.list[26]?.main?.temp,
    forecast?.list[27]?.main?.temp,
    forecast?.list[28]?.main?.temp,
    forecast?.list[29]?.main?.temp,
    forecast?.list[30]?.main?.temp,
    forecast?.list[31]?.main?.temp
  );

  const day5temp: IMaxMin = findMaxMin(
    forecast?.list[32]?.main?.temp,
    forecast?.list[33]?.main?.temp,
    forecast?.list[34]?.main?.temp,
    forecast?.list[35]?.main?.temp,
    forecast?.list[36]?.main?.temp,
    forecast?.list[37]?.main?.temp,
    forecast?.list[38]?.main?.temp,
    forecast?.list[39]?.main?.temp
  );

  const day1 = {
    temperature: day1temp,
    weatherDescription: forecast?.list[0]?.weather[0]?.description,
  } as IForecastDisplayInformations;

  const day2 = {
    temperature: day2temp,
    weatherDescription: forecast?.list[8]?.weather[0]?.description,
  } as IForecastDisplayInformations;

  const day3 = {
    temperature: day3temp,
    weatherDescription: forecast?.list[16]?.weather[0]?.description,
  } as IForecastDisplayInformations;

  const day4 = {
    temperature: day4temp,
    weatherDescription: forecast?.list[24]?.weather[0]?.description,
  } as IForecastDisplayInformations;

  const day5 = {
    temperature: day5temp,
    weatherDescription: forecast?.list[32]?.weather[0]?.description,
  } as IForecastDisplayInformations;

  let date = new Date(forecast?.list[38]?.dt * 1000);

  const day = date.getDate();
  const week = date.getDay();
  const month = getMonthName(date.getMonth());

  const timestamp: ITimestamp = { day: day, week: week, month: month };

  return (
    <ForecastInformations
      city={forecast?.city?.name}
      toggle={toggle}
      timestamp={timestamp}
      day1={day1}
      day2={day2}
      day3={day3}
      day4={day4}
      day5={day5}
    />
  );
}
