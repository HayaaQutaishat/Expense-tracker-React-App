import "./ExpenseItem.css";
import Card from "./Card";
import Expensedate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Expensedate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
