import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IFiveDaysForecast {
  day1: number;
  day2: number;
  day3: number;
  day4: number;
  day5: number;
}
//change to array
export default function ForecastInformations({
  day1,
  day2,
  day3,
  day4,
  day5,
}: IFiveDaysForecast) {
  let navigate = useNavigate();

  const handleReturn = () => {
    navigate('/informations');
  };

  // console.log(day1);
  // console.log(day2);
  // console.log(day3);
  // console.log(day4);
  // console.log(day5);

  return (
    <div>
      <img
        className='arrow-icon'
        src={require('../../assets/left_arrow.png')}
        alt='Icon of an arrow'
        style={{ margin: '40px' }}
        onClick={handleReturn}
      />
    </div>
  );
}
