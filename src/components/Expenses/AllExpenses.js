import ExpenseItem from "../Expenses/ExpenseItem";
import "./AllExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const AllExpenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState(2020);

  const onSaveFilterYear = (filterYear) => {
    setFilterYear(filterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSaveFilterYear={onSaveFilterYear}
        filterYear={filterYear}
      />
      {expenses
        .filter((expense) => expense.date.getFullYear() === filterYear)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
    </Card>
  );
};

export default AllExpenses;

/* 
1. Create a new component that filters the expense array received from the App component
2. Pass in the expense array into the new expense filter component as props
3. Within the expense filter component, the logic to filter the expense array based on year will be performed here
4. You are going to return the filtered array from the expense filter to the All Expenses component which will be mapped over to be rendered 
5. You need to create state within the All Expenses component called filteredArray 
6. To pass the filtered array from the child Expense filter component, we need to do it via a function call that will be passed down via props 
7. Then we will use the setFilteredArray function provided via the useState hook to capture the value 
*/
