import "./ExpensesFilter.css";

const ExpensesFilter = ({ unfilteredExpenses, onSaveFilteredExpenses }) => {
  const filterYearInputHandler = (e) => {
    const year = parseInt(e.target.value);
    const filteredExpenses = unfilteredExpenses.filter((expense) => {
      return expense.date.getFullYear() === year;
    });
    onSaveFilteredExpenses(filteredExpenses);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterYearInputHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
