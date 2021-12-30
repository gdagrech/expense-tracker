import ExpenseForm from './ExpenseForm';
import {useState} from 'react';

import './NewExpense.css';

const NewExpense = (props) => {
  const [isEdtiting, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEdtiting && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEdtiting && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;
