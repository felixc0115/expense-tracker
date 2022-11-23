import ExpenseItem from "../Expenses/ExpenseItem";
import "./AllExpenses.css";
import Card from "../UI/Card";

const AllExpenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
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
