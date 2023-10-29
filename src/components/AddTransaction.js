import React, { useState } from 'react'

function AddTransaction() {
    const [description, setDescription] = useState(null);
    const [category, setCategory] = useState(null);
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            date,
            description,
            category,
            amount: parseFloat(amount), // Convert amount to a number
          };

        fetch('http://localhost:4000/transactions', {
            method: 'POST',
            headers: {
                "Content-Type":'application/json'
            },
            body: JSON.stringify(newTransaction)
        })
        .then((response)=>{
            if (response.ok) {
                alert('Transaction added successfully');

                setDescription('');
                setCategory('');
                setAmount(0);
                setDate('');
              } else {
                alert('Error adding transaction');
              } 
        })
        .catch (error => {
            console.error('Error:', error);
        })
    }
  return (
    <div>
        <div style={{padding: '10px', fontWeight:'bold', fontSize:'large'}}>Add Transaction</div>
        <form>
            <label htmlFor="description">Description: </label>
            <br />
            <input 
            type='text' 
            required
            placeholder='Enter description'
            onChange={(e)=> setDescription(e.target.value)}
            />
            <br />
            <label htmlFor="description">Category: </label>
            <br />
            <select
            required
            onChange={(e)=> setCategory(e.target.value)}

            >
                <option></option>
                <option value="Income">Income</option>
                <option value="Food">Food</option>
                <option value="Fashion">Fashion</option>
                <option value="Gift">Gift</option>
                <option value="Housing">Housing</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
            </select>

            <br />
            <label htmlFor="Amount">Amount: </label>
            <br />
            <input 
            type='number' 
            placeholder='Enter amount'
            required
            onChange={(e)=> setAmount(e.target.value)}
            />
             
            <br />
            <label htmlFor="date">Select Date: </label>
            <br />
            <input 
            type="date"
            onChange={(e)=> setDate(e.target.value)}
            required
            />

            <br />

            <button
            onClick={
                (e)=> handleSubmit(e)
            }
            type='submit'>
                Submit
            </button>

        </form>
    </div>
  )
}

export default AddTransaction