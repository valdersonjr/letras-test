import React, { useEffect, useState } from 'react';

import axios from 'axios';

import openWheatherApiKey from '../../APIKeys/openWheatherAPIKey';

import { WheatherInformationsDisplay } from '../../components';
interface ICoordinates {
  lat: number;
  lng: number;
}

export default function WheatherInformations({ lat, lng }: ICoordinates) {
  const [cityData, setCityData] = useState<any>(null);

  const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWheatherApiKey}`,
  });

  useEffect(() => {
    api
      .get('')
      .then((response) => {
        setCityData(response.data);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <WheatherInformationsDisplay
      city={cityData?.name}
      weatherDescription={cityData?.weather[0]?.description}
      temperature={cityData?.main?.temp}
      maxTemperature={cityData?.main?.temp_max}
      minTemperature={cityData?.main?.temp_min}
    />
  );
}
