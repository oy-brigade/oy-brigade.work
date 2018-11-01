export function getDateString(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const year: string = date.getFullYear().toString();
  const month: string = ('00' + (date.getMonth() + 1)).slice(-2);
  const day: string = ('00' + date.getDate()).slice(-2);

  return `${year}.${month}.${day}`;
}
