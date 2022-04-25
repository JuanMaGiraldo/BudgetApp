const data = {
  salary: 1_000_000,
  homeExpensesPercentage: 0.3,
  investmentPercentage: 0.5,
  personalPercentage: 0.2,
  expenses: {
    "03-2022": [
      { category: 1, value: 3100, date: new Date() },
      { category: 2, value: 3300, date: new Date() },
      { category: 3, value: 100, date: new Date() },
      { category: 1, value: 3400, date: new Date() },
      { category: 2, value: 5000, date: new Date() },
      { category: 3, value: 3000, date: new Date() },
      { category: 1, value: 1000, date: new Date() },
    ],
  },
  categories: [
    { id: 1, type: "home", name: "rental" },
    { id: 2, type: "saving", name: "CDT" },
    { id: 3, type: "personal", name: "food" },
    { id: 3, type: "personal", name: "IT" },
  ],
};

export { data };
