import { getLastNMonths, getLastNMonthsRange } from "./dateUtils";

export function calculatePoints(amount) {
  if (amount <= 50) return 0; // No points for $50 or less
  if (amount <= 100) return amount - 50; // 1 point per dollar between $50 and $100
  return 50 + (amount - 100) * 2; // 2 points per dollar over $100
}

export function calculateCustomerRewards(transactions, monthsToConsider = 3) {
  const { start, end } = getLastNMonthsRange(monthsToConsider); // Get date range for last three months
  const months = getLastNMonths(monthsToConsider); // Get last three months
  const rewards = {}; //Initialize rewards object

  // Filter transactions within the date range and calculate points for each

  transactions
    .filter((tx) => {
      const txDate = new Date(tx.date);
      return txDate >= start && txDate <= end;
    })
    .forEach(({ customer, date, amount }) => {
      const month = new Date(date).toLocaleString("default", {
        month: "short",
      });
      const points = calculatePoints(amount);
      if (!rewards[customer]) rewards[customer] = { months: {}, total: 0 }; // Initialize customer if not present
      rewards[customer].months[month] =
        (rewards[customer].months[month] || 0) + points;
      rewards[customer].total += points;
    });

  return { rewards, months };
}
