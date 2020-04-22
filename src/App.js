import React from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './add';
import Expenses from "./expenses";
import ExpensesTable from "./expensesTable";

export let exps = [];

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <text > Expense Tracker </text>
        <ExpensesTable />
      </header>
    </div>
  );
}

export default App;
