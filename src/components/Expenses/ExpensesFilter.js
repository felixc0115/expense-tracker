import "./ExpensesFilter.css";

const ExpensesFilter = ({ onSaveFilterYear, filterYear }) => {
  const filterYearInputHandler = (e) => {
    const year = parseInt(e.target.value);
    onSaveFilterYear(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filterYear} onChange={filterYearInputHandler}>
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
