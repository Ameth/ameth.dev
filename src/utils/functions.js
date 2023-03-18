export const FormatDate = (date) => {
  const event = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const newDate = event.toLocaleDateString('es-ES', options)
  return newDate
}
