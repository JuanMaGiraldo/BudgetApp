const filterExpensesThisMonth = (expenses) => {
  const today = new Date();
  const expensesThisMonth =  expenses.filter(
    ({ month }) => month === `${today.getMonth()}-${today.getFullYear()}`
  );

  return filterExpensesByCategories(expensesThisMonth);
};

const filterExpensesByCategories = (expenses) => {
  const expensesFiltered = {basic: [], saving: [], personal: []};

  expenses.forEach(expense => {
    expensesFiltered[expense.type].push({x: expense.category, y: expense.value});
  })

  return expensesFiltered;
}


export { filterExpensesThisMonth };
