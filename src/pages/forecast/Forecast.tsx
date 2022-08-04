import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { ForecastInformations } from '../../components';

import openWheatherApiKey from '../../APIKeys/openWheatherAPIKey';

interface ICoordinates {
  lat: number;
  lng: number;
}

export default function Forecast({ lat, lng }: ICoordinates) {
  const [forecast, setForecast] = useState<any>(null);

  const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${openWheatherApiKey}`,
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

  return (
    <ForecastInformations
      day1={forecast?.list[0]?.main?.temp}
      day2={forecast?.list[8]?.main?.temp}
      day3={forecast?.list[16]?.main?.temp}
      day4={forecast?.list[24]?.main?.temp}
      day5={forecast?.list[32]?.main?.temp}
    />
  );
}
