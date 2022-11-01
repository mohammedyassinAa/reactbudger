import './App.css';
import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import Incomelist from './components/IncomeList';
import Expenselist from './components/ExpenseList';
// what is the context provider => Context is primarily used when some data needs 
// to be accessible by many components at different nesting levels
import {GlobalContextProvider } from './context/GlobalState';
import Graph from './components/GrapheIncome';
const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <Incomelist />
          <Expenselist />
          <AddTransaction />
          <Graph/>
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;