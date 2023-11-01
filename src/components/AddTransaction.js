// AddTransaction.js
import React, { useState } from 'react';

function AddTransaction({ onTransactionAdded }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input (you can add more validation logic)
    if (!description || !category || !amount || !date) {
      alert('Please fill in all fields');
      return;
    }

    const newTransaction = {
      description,
      category,
      amount,
      date,
    };

    try {
      const response = await fetch('http://localhost:4000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error('Failed to add transaction');
      }

      const addedTransaction = await response.json();

      // Pass the new transaction to the parent component
      onTransactionAdded(addedTransaction);

      // Clear the form fields
      setDescription('');
      setCategory('');
      setAmount('');
      setDate('');
    } catch (error) {
      console.error('Error adding transaction:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
