import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredYearHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredYearArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  // console.log(props);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onFilteredYear={filteredYearHandler}
        />
        <ExpensesChart expenses={filteredYearArray} />
        <ExpensesList items={filteredYearArray} />

        {/* {filteredYearArray.length === 0 && <p>No Items Found!</p>}
        {filteredYearArray.length > 0 &&
          filteredYearArray.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {filteredYearArray.length === 0 ? (
          <p>No Items Found!</p>
        ) : (
          filteredYearArray.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};
export default Expenses;
