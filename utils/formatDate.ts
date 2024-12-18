export const formatDate = (dateString: string): string => {
  const [day, month, year] = dateString.split('.').map(Number);

  const fullYear = 2000 + year;

  const date = new Date(fullYear, month - 1, day); 

  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    month: 'short',
    year: 'numeric',
    weekday: 'short',
    day: '2-digit' 
  }).format(date);

  const [weekdayShort, dayFormatted, monthShort, yearFull] = formattedDate.split(' ');

  return `${dayFormatted} ${monthShort} ${yearFull}, ${weekdayShort}`;

};