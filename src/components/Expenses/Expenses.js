import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredYearHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onFilteredYear={filteredYearHandler}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          amount={props.expenses[0].amount}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          date={props.expenses[1].date}
          amount={props.expenses[1].amount}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          date={props.expenses[2].date}
          amount={props.expenses[2].amount}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          date={props.expenses[3].date}
          amount={props.expenses[3].amount}
        />
      </Card>
    </div>
  );
};
export default Expenses;
