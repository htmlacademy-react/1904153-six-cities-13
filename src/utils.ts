export function formatDateToHuman(inputDate: string) {
  const dateObj = new Date(inputDate);
  const formatter = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' });
  return formatter.format(dateObj);
}

export function formatDateToServer(inputDate: string) {
  const dateObj = new Date(inputDate);
  return dateObj.toISOString().slice(0, 10);
}

export const getFavoriteStyles = (isFav: boolean) => {
  if (isFav) {
    return { fill: '#4481c3', stroke: '#4481c3' };
  }
};
