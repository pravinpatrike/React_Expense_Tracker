import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //console.log(expenseData);
  };

  const startEditor = () => {
    setisEditing(true);
  };
  const stopEditor = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditor}>Add New Expense</button>}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditor}
        />
      )}
    </div>
  );
};

export default NewExpense;
