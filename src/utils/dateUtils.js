// Function to get the last N (Default 3) months as an array of month names
export function getLastNMonths(n = 3) {
  const months = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(date.toLocaleString("default", { month: "short" }));
  }
  return months;
}

// Function to get the date range for the last N (Default 3) months
export function getLastNMonthsRange(n = 3) {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - (n - 1), 1);
  return { start, end: now };
}
