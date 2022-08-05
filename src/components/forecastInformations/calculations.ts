interface IMaxMin {
  max: number;
  min: number;
}

export function findMaxMin(
  temp1: number,
  temp2: number,
  temp3: number,
  temp4: number,
  temp5: number,
  temp6: number,
  temp7: number,
  temp8: number
) {
  const arr = [temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8];

  let maxMin = {} as IMaxMin;

  maxMin.max = arr[0];
  maxMin.min = arr[0];

  for (let i = 0; i < 8; i++) {
    if (maxMin.max < arr[i]) {
      maxMin.max = arr[i];
    }
    if (maxMin.min > arr[i]) {
      maxMin.min = arr[i];
    }
  }

  return maxMin;
}

export function findIcon(description: string): string {
  if (description === 'clear sky') {
    return '../../assets/clear_sky.png';
  } else if (description === 'few clouds') {
    return '../../assets/few_clouds.png';
  } else if (description === 'heavy rain') {
    return '../../assets/heavy_rain.png';
  } else {
    return '../../assets/no_icon.png';
  }
}
