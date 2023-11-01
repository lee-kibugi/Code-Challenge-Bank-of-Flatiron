

// export default App;
import React, { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import DisplayTransactions from './components/DisplayTransactions';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleTransactionAdded = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  }

  return (
    <div className="App">
      <AddTransaction onTransactionAdded={handleTransactionAdded} />
      <DisplayTransactions transactions={transactions} />
    </div>
  );
}

export default App;
