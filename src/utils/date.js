export function formatDate(dateInput) {
  return dateInput.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
}

export function formatTime(dateInput) {
  return dateInput.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}
