import ExpenseItem from "./ExpenseItem";
import "./AllExpenses.css";

const AllExpenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default AllExpenses;
