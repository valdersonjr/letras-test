export function kelvinConverterToType(K: number, type: string) {
  let convertedTemperature = null;

  if (type === 'celsius') {
    convertedTemperature = K - 273.15;
  } else if (type === 'fahrenheit') {
    convertedTemperature = K + 459.67;
  } else {
    console.log('that type is yet not supported');
  }

  if (convertedTemperature !== null)
    convertedTemperature = Math.round(convertedTemperature);
  else convertedTemperature = -404;

  return convertedTemperature;
}
