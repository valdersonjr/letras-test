import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

interface ICoordinates {
  lat: number;
  lng: number;
}

export default function WheatherInformations({ lat, lng }: ICoordinates) {
  const [city, setCity] = useState<any>({});

  const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0ae4dc84b7d0b1202da634265fc7fbf7`,
  });

  useEffect(() => {
    api
      .get('')
      .then((response) => setCity(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <div>
      <div>awdawdaw</div>
    </div>
  );
}
