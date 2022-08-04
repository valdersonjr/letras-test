export function getMonthName(monthNumber: number) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return monthNames[monthNumber];
}

export function getDayOfTheWeekName(weekNumber: number) {
  const DayOfTheWeekName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return DayOfTheWeekName[weekNumber];
}
