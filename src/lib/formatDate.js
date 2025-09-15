export function formatDate(isoDate) {
  const date = new Date(isoDate)

  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Jakarta',
  }

  return date.toLocaleString('id-ID', options)
}
