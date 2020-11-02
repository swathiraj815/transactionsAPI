const getStartDate = (monthsAgo) => {
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - Math.max(monthsAgo, 1) + 1);
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
};

const generateData = (monthsAgo) => {
  const startDate = getStartDate(monthsAgo);
  const [min, max] = [25, 200]
  const length = 200
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const endDate = new Date()
  const startMs = startDate.getTime()
  const spanMs = endDate.getTime() - startMs

  const data = Array.from({ length }, () => startMs + Math.round(Math.random() * spanMs))
      .sort((a, b) => a - b)
      .map((date) => ({
          date,
          month: months[new Date(date).getMonth()],
          purchaseAmount: min + Math.random() * (max - min) | 0
      }));

  return Array.from({ length }, () => startMs + Math.round(Math.random() * spanMs))
    .sort((a, b) => a - b)
    .map((date) => ({
        date,
        month: months[new Date(date).getMonth()],
        purchaseAmount: min + Math.random() * (max - min) | 0
    }));
};

module.exports = {generateData};