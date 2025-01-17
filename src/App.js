import React from 'react';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import ExpenseList from './components/ExpenseList';
import ChartDisplay from './components/ChartDisplay';
import BudgetSummary from './components/BudgetSummary';


function App() {
  return (
      <div>
          <Header />
          <div className="container mx-auto mt-8">
          <BudgetSummary />
              <AddTransaction />
              <ExpenseList />
              <ChartDisplay />

          </div>
      </div>
  );
}

export default App;


