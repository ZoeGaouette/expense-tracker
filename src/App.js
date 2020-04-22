import React from 'react';
import './App.css';
import ExpensesTable from "./expensesTable";

export let exps = [];

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <text style={{fontSize: "35px", fontFamily:"Courier New, monospace", color: "#006400", textDecoration: "underline"}}> Expense Tracker </text>
          <p id={'welcome'} style={{fontSize: "20px", fontFamily:"Courier New, monospace"}}>
              Welcome to the expense tracker! To add a new expense, fill in the fields below in the 'add expense' form.
              You can see your log of expenses in the 'expenses' table.
              To delete expenses matching a certain name/cost/category, fill in the fields in the 'delete expenses' section.
          </p>
        <ExpensesTable />
      </header>
    </div>
  );
}

export default App;
